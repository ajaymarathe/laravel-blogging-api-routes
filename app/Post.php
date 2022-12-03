<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Comments;
use App\Category;
use App\Like;

class Post extends Model
{

    protected $guarded = [];

    public function getRouteKeyName(){
        return 'slug';
    }

    public function comments(){
        return  $this->hasMany(Comments::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function cateogry(){
        return $this->belongsTo(Category::class);
    }

    public function likes() {
        return $this->hasMany(Like::class);
    }

}
