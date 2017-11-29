<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends ApiController
{
    public function authenticate(Request $request)
    {
        $data = $request->all();
        $email = $data['username'];
        $password = $data['password'];
        $user = User::where('email', '=', $email)->first();

        if (!$user) return $this->responseNotFound('Wrong username');

        $token = JWTAuth::attempt(['email'=>$email, 'password' => $password]);

        if (!$token) return $this->responseNotFound('Wrong combination');

        return $this->tokenCreated($token, 'You are logged in!');
    }

    public function getCurrentUser(Request $request)
    {
        JWTAuth::setRequest($request);
        $token = JWTAuth::getToken();

        $user = JWTAuth::toUser($token);

        $user = User::find($user->id);

        return response()->json($user);
    }

}
