<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Comments;
use Faker\Generator as Faker;

$factory->define(Comments::class, function (Faker $faker) {
    return [
        'body' => $faker->text,
        'post_id'=> function(){
            return \App\Post::all()->random();
        },
        'user_id' => function(){
            return \App\User::all()->random();
        }
    ];
});
