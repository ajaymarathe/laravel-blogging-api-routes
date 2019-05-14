<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Post;

class Category extends Model
{
    protected $fillable = ['user_id','category'];

    public function post(){
        return $this->belongsTo(Post::class);
    }
    
}
