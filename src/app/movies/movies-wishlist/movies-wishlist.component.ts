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
// export class MoviesWishlistComponent {
//   movieID = 0
//   moviesList: any

//   constructor(private _MoviesDataService: MoviesDataService, private _MoviesWishlist: MoviesWishlistService) {
//     this.moviesList = _MoviesWishlist.displayMoviesList()
//     _MoviesWishlist.setCounter(this.moviesList.length)

//     localStorage.setItem("moviesList", JSON.stringify(this.moviesList))


//   }
// ngOnInit(){
//       if (localStorage.getItem("moviesList") != null ) {
//     console.log(JSON.parse(localStorage.getItem("moviesList")));


//       document.getElementById("noMovies")?.classList.add("d-none")
//       document.getElementById("movesList")?.classList.add("d-block")

//     } else if (localStorage.getItem("moviesList") == null) {

//       console.log("nukk");

//       document.getElementById("noMovies")?.classList.add("d-block")
//       document.getElementById("movesList")?.classList.add("d-none")


//     }
// }

//   getRoundedPopularity(popularity: number): number {
//     return Math.floor(popularity);
//   }


// }
export class MoviesWishlistComponent {
  movieID = 0;
  moviesList: any;


  constructor(private _MoviesDataService: MoviesDataService, private _MoviesWishlist: MoviesWishlistService) {
    document.getElementById("noMovies")?.classList.add("d-none")
    this.moviesList = _MoviesWishlist.displayMoviesList();
    _MoviesWishlist.setCounter(this.moviesList.length);

    const storedMoviesList = localStorage.getItem("moviesList");
    const storedMoviesCounter = Number(localStorage.getItem("moviesListCounter"))


    if (storedMoviesList !== null) {
      localStorage.setItem("moviesList", JSON.stringify(this.moviesList));
      document.getElementById("noMovies")?.classList.add("d-none")
      document.getElementById("movesList")?.classList.add("d-block")

    }
    if (storedMoviesCounter == 0) {
      document.getElementById("noMovies")?.classList.add("d-block")
      document.getElementById("movesList")?.classList.add("d-none")

    }
  }


  getRoundedPopularity(popularity: number): number {
    return Math.floor(popularity);
  }
}
