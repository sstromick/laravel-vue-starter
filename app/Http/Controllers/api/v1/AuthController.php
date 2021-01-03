<?php

namespace App\Http\Controllers\api\v1;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\UpdateRequest;
use App\Http\Requests\Auth\ForgotPasswordRequest;
use App\Http\Requests\Auth\UpdatePasswordRequest;
use Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\PasswordReset;

class AuthController extends Controller
{
  public function index(Request $request)
  {
    return response()->json(['data' => $request->user(), 'message' => 'User fetched'], 200);
  }

  public function update(UpdateRequest $request, User $user)
  {
    $attributes = $request->validated();

    $user->update($attributes);

    return response()->json(['data' => $user, 'message' => 'User updated'], 200);
  }

  public function updatePassword(UpdatePasswordRequest $request, User $user)
  {
    $attributes = $request->validated();

    if (Hash::check($request->current_password, Auth::user()->password) == false) {
      return response()->json(['data' => '', 'message' => ['Current password is incorrect']], 403);
    }

    $user->password = Hash::make($request->password);
    $user->save();

    return response()->json(['data' => $user, 'message' => 'User password updated'], 200);
  }

  public function resetPassword(Request $request)
  {
    $request->validate([
      'token' => 'required',
      'email' => 'required|email',
      'password' => 'required|string|confirmed|min:8',
    ]);

    $status = Password::reset(
      $request->only('email', 'password', 'password_confirmation', 'token'),
      function ($user) use ($request) {
        $user->forceFill([
          'password' => Hash::make($request->password),
          'remember_token' => Str::random(60),
        ])->save();

        event(new PasswordReset($user));
      }
    );

    return $status == Password::PASSWORD_RESET
      ? response()->json(['message' => ['Password changed.']], 201)
      : response()->json(['message' => ['Unable to reset password']], 404);
  }

  public function forgotPassword(ForgotPasswordRequest $request)
  {
    $status = Password::sendResetLink(
      $request->only('email')
    );

    return $status == Password::RESET_LINK_SENT
      ? response(['message' => ['Reset link sent to your email.']], 201)
      : response(['message' => ['Unable to send reset link']], 404);
  }

  public function logout()
  {
    Auth::logout();
    return response(null, 200);
  }

  public function login(LoginRequest $request)
  {
    $attributes = $request->validated();

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
      return response([
        'message' => ['These credentials do not match our records.']
      ], 404);
    }

    $token = $user->createToken('my-app-token')->plainTextToken;

    $response = [
      'user' => $user,
      'token' => $token
    ];

    return response($response, 201);
  }

  public function register(RegisterRequest $request)
  {
    $attributes = $request->validated();
    $user = User::create(['email' => $attributes['email'], 'name' => $attributes['name'], 'password' => Hash::make($attributes['password'])]);

    $token = $user->createToken('my-app-token')->plainTextToken;

    $response = [
      'user' => $user,
      'token' => $token,
      'message' => "User Created"
    ];

    return response($response, 201);
  }

  public function destroy(User $user)
  {
    $user->delete();
    return response()->json(['data' => $user, 'message' => 'User deleted'], 204);
  }
}
