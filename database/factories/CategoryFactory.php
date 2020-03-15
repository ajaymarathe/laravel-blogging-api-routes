<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'category'=> $faker->word,
        'user_id'=> function(){
            return \App\User::all()->random();
        }
    ];
});
