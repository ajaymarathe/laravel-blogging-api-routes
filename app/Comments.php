<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Post;

class Comments extends Model
{
    public function post(){
        return $this->belongsTo(Post::class);
    }

    protected $guarded = [];
}
