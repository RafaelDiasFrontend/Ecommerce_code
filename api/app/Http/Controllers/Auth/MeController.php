<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PrivateUserResource;

class MeController extends Controller
{
    // Needs to be login to see the Resource
    public function __construct()
    {
        $this->middleware(['auth:api']);
    } 
    // Action request calling PrivateUserResource
    public function action(Request $request)
    {
        return new PrivateUserResource ($request->user());        
    }
}
