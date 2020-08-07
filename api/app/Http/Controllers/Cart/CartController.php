<?php

namespace App\Http\Controllers\Cart;

use App\Cart\Cart;
use Illuminate\Http\Request;
use App\Models\ProductVariation;
use App\Http\Controllers\Controller;
use App\Http\Resources\Cart\CartResource;
use App\Http\Requests\Cart\CartStoreRequest;

class CartController extends Controller
{   

   public function __construct()
    {
        $this->middleware(['auth:api']);       
    }
    public function index (Request $request, Cart $cart)
    {
        $cart->sync();

        $request->user()->load(['cart.product', 'cart.product.variations.stock', 'cart.stock', 'cart.type' ]);
        return (new CartResource($request->user( )))
        ->additional([
            'meta' => $this->meta($cart, $request)
        ]);
    }
    protected function meta(Cart $cart, Request $request)
    {
        return [
            'empty' => $cart->isEmpty(),
            'subtotal' => $cart->subtotal()->formatted(),
            'total' => $cart->withShipping($request->shipping_method_id)->total()->formatted(),            
            'changed' => $cart->hasChanged()
        ];
    }

    public function store(CartStoreRequest $request, Cart $cart)
    {
        $cart->add($request->products);  
       
    }  
    // Update product
    public function update(ProductVariation $productVariation, Request $request, Cart $cart)
    {
        $cart->update($productVariation->id, $request->quantity);       
    }  
    // Delete product
    public function destroy(ProductVariation $productVariation, Cart $cart)
    {
        $cart->delete($productVariation->id);       
    }  
}
