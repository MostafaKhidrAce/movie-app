import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { Movieface } from 'src/app/interface/movieface';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movies-wishlist',
  templateUrl: './movies-wishlist.component.html',
  styleUrls: ['./movies-wishlist.component.css']
})

export class MoviesWishlistComponent {
  movieID = 0;
  moviesList: any;


  constructor(private _MoviesDataService: MoviesDataService, private _MoviesWishlist: MoviesWishlistService) {
    document.getElementById("noMovies")?.classList.add("d-none")

    if (localStorage.getItem("moviesList") != null) {
      this.moviesList = localStorage.getItem("moviesList")

    }

    this.moviesList = _MoviesWishlist.displayMoviesList();
    _MoviesWishlist.setCounter(this.moviesList.length);




  }


  getRoundedPopularity(popularity: number): number {
    return Math.floor(popularity);
  }
}
