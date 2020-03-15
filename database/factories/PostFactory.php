<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    $title = $faker->sentence();
    return [
        'title' => $title,
        'slug' => str_slug($title),
        'body'=> $faker->text,
        'category'=> $faker->word,
        'user_id'=> function(){
            return \App\User::all()->random();
        }
    ];
});
