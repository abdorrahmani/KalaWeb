<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth',"user.access:admin"])->prefix('/admin')->group(function(){
    Route::get('/dashboard',[App\Http\Controllers\Admin\DashboardController::class ,'index'])->name('admin.dashboard');
    Route::resource('/orders',App\Http\Controllers\Admin\OrdersController::class );
    Route::resource('/supermarket',App\Http\Controllers\Admin\SupermarketController::class);
    Route::resource('/stores',\App\Http\Controllers\Admin\StoreController::class);
    Route::resource('/users',\App\Http\Controllers\Admin\UserController::class);
    Route::resource('/blog',\App\Http\Controllers\Admin\BlogController::class);
    Route::resource('/comments',\App\Http\Controllers\Admin\CommentController::class);
    Route::resource('/products',\App\Http\Controllers\Admin\ProductController::class);
});
