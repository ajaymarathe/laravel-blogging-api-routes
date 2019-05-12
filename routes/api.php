<?php

use Illuminate\Http\Request;

/**
 * post
 * category
 * comments
 */

Route::apiResource('posts','PostController');
Route::apiResource('category','CategoryController');
Route::apiResource('/post/{post}/comment','CommentsController');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
