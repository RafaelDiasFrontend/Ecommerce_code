<?php

namespace App\Http\Controllers\Orders;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Http\Requests\Orders\OrderStoreRequest;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api']);
    }


    public function store(OrderStoreRequest $request)
    {
    return [
        dd('a')
        // 'address_id' => [
        //     'required',
        //     Rule::exists('addresses', 'id')->where(function ($builder) {
        //         $builder->where('user_id', $this->user()->id);
        //     })
        // ],
        // 'shipping_method_id' => [
        //     'required',
        //     'exists:shipping_methods,id'
        //             ]

    ];
    }
}
