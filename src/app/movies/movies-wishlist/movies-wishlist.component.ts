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
  moviesList: any[] = [];
  constructor(private _MoviesDataService: MoviesDataService, private _MoviesWishlist: MoviesWishlistService) {

    this.moviesList = _MoviesWishlist.displayMoviesList();
    _MoviesWishlist.setCounter(this.moviesList.length);

    this.filterMovieArray(this.moviesList)


  }

  filterMovieArray(moviesList: any[]) {

    const objectSet = new Set();
    for (let i = this.moviesList.length - 1; i >= 0; i--) {
      const obj = this.moviesList[i];
      const objString = JSON.stringify(obj);

      if (objectSet.has(objString)) {
        this.moviesList.splice(i, 1);
      } else {
        objectSet.add(objString);
      }
      this._MoviesWishlist.setCounter(moviesList.length)

    }
  }

  getRoundedPopularity(popularity: number): number {
    return Math.floor(popularity);
  }
}
