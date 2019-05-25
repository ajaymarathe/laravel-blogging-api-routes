<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'category'=> $faker->title,
        'user_id'=> function(){
            return \App\User::all()->random();
        }
    ];
});