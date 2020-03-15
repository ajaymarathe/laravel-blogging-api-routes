<?php

use Illuminate\Http\Request;

/**
 * post
 * category
 * comments
 */

 /* cors origin  */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept,Authorization ");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE");

Route::apiResource('posts','PostController');
Route::apiResource('category','CategoryController');
Route::apiResource('/post/{post}/comment','CommentsController');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
