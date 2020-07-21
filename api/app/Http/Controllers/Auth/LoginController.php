<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\PrivateUserResource;

class LoginController extends Controller
{
    public function action(LoginRequest $request)
    {
    if (!$token = auth()->attempt($request->only('email', 'password'))) {
       return response()->json([
       'errors' => [
           'email' => ['Não foi possível efetuar o login com os dados informados']
       ]
       ], 422);
    } 
    return (new PrivateUserResource($request->user()))
    ->additional([
        'meta' => [
            'token' => $token
        ]
    ]);
    }
}
