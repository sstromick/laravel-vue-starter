<?php

namespace App\Http\Controllers\api\v1;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\User\UserLoginRequest;
use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Http\Requests\User\UserForgotPasswordRequest;
use Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

class UserController extends Controller
{
  use App\Notifications\ResetPasswordNotification;

  public function index()
  {
    $users = User::getFilteredUsers();
    return response()->json(['data' => $users], 200);
  }

  public function show(User $user)
  {
    return response()->json(['data' => $user], 200);
  }

  public function sendPasswordResetNotification($token)
  {
    $url = env("APP_URL") . '/resetpassword?token=' . $token;

    $this->notify(new ResetPasswordNotification($url));
  }
}
