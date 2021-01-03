<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function () {
    Route::post('/forgot-password', 'App\Http\Controllers\api\v1\AuthController@forgotPassword');
    Route::post('/reset-password', 'App\Http\Controllers\api\v1\AuthController@resetPassword');
    Route::post('/register', 'App\Http\Controllers\api\v1\AuthController@register');
    Route::post('/login', 'App\Http\Controllers\api\v1\AuthController@login');
    Route::delete('/logout', 'App\Http\Controllers\api\v1\AuthController@logout');
});

Route::group(['prefix' => 'v1', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/user', 'App\Http\Controllers\api\v1\AuthController@index');
    Route::patch('/user/{user}', 'App\Http\Controllers\api\v1\AuthController@update');
    Route::patch('/userPassword/{user}', 'App\Http\Controllers\api\v1\AuthController@updatePassword');
});
