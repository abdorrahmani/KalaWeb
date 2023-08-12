<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * @param Request $request
     * @param $productId
     * @return RedirectResponse
     */
    public function addToCart(Request $request, $productId)
    {
        $cart = $request->cookie('cart', []);

        if (!in_array($productId, $cart)) {
            $cart[] = $productId;
        }

        return redirect()->back()->withCookie(cookie()->forever('cart', $cart));
    }

    /**
     * @param Request $request
     * @param $productId
     * @return RedirectResponse
     */
    public function removeFromCart(Request $request, $productId)
    {
        $cart = $request->cookie('cart', []);

        if (($key = array_search($productId, $cart)) !== false) {
            unset($cart[$key]);
        }

        return redirect()->back()->withCookie(cookie()->forever('cart', $cart));
    }

    /**
     * @param Request $request
     * @return Application|Factory|View|\Illuminate\Foundation\Application
     */
    public function showCart(Request $request)
    {
        $cart = $request->cookie('cart', []);

        return view('cart', ['cart' => $cart]);
    }

    public function checkout(Request $request)
    {
        $cart = $request->cookie('cart', []);

//        pay section

        $cart = [];
        return redirect()->route('cart.show')->withCookie(cookie()->forever('cart', $cart))
            ->with('success', 'خرید شما با موفقیت انجام شد.');
    }

}
