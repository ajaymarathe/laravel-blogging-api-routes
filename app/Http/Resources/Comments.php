<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Comments as CommentResource;
use App\Http\Resources\User as UserResource;


class Comments extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
          'id' => $this->id,
          'body' => $this->body,
          'user' =>  new UserResource($this->user),
          'created_at' =>  $this->created_at->diffForHumans(),
          'updated_at' => $this->updated_at->diffForHumans(),
      ];
    }
}
