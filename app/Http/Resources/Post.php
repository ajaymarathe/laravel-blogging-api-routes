<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\Comments as CommentResource;


class Post extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      $totalCommentPostHas = [];
      $totalComments = $this->comments;

      foreach($totalComments as $comment) {
        array_push($totalCommentPostHas, new CommentResource($comment));
      }

      return [
          'id' => $this->id,
          'title' => $this->title,
          'slug' => $this->slug,
          'description' => $this->body,
          'category' => $this->category,
          'user' =>  new UserResource($this->user),
          'comments' => $totalCommentPostHas,
          'created_at' =>  $this->created_at->diffForHumans(),
          'updated_at' => $this->updated_at->diffForHumans(),
      ];
    }
}
