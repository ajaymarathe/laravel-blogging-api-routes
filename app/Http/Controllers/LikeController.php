<?php

namespace App\Http\Controllers;

use App\Like;
use App\Post;
use Illuminate\Http\Request;
use App\Http\Resources\Like as LikeResource;

class LikeController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
      return Like::latest()->get();
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Post $post, Request $request)
  {

    $like = $post->likes()->updateOrCreate(
      [ 'post_id' => $post->id, 'user_id' => $request->user_id ],
      ['like' => $request->like ]
    );
    return response()->json(new LikeResource($like), 200);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Like  $like
   * @return \Illuminate\Http\Response
   */
  public function show(Like $like)
  {
      //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Like  $like
   * @return \Illuminate\Http\Response
   */
  public function edit(Like $like)
  {
      //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Like  $like
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Like $like)
  {
      //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Like  $like
   * @return \Illuminate\Http\Response
   */
  public function destroy(Like $like)
  {
      //
  }
}
