"use strict";

let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?", " ");

let lastMovieWatched = prompt ("Один из последних просмотренных фильмов?", " ");
let lastMovieWatched2 = prompt ("Один из последних просмотренных фильмов?", " ");

let movieRate = prompt ("На сколько бы вы их оценили?", " ");
let movieRate2 = prompt ("На сколько бы вы их оценили?", " ");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    } ,
    actors: {

    },
    genres: [],
	privat: false
}

personalMovieDB.movies[lastMovieWatched] = movieRate;
personalMovieDB.movies[lastMovieWatched2] = movieRate2;


console.log (personalMovieDB);