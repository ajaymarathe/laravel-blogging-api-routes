<?php

use Illuminate\Http\Request;

/**
 * Post
 * Category
 * Comments
 * Like
 */

 /* cors origin  */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept,Authorization ");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE");

Route::apiResource('posts','PostController');
Route::apiResource('category','CategoryController');
Route::apiResource('/post/{post}/comment','CommentsController');
Route::apiResource('/post/{post}/like','LikeController');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});
