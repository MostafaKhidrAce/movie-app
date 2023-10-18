import { Component, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  counter = 0
  addedItem = false
  moviesList: any
  movieID: any

  @Input() movie: any;
  redirectToDetails(id: number) {
    this._router.navigate(['movie-details', id]);
  }

  constructor(private _router: Router, private _MoviesWishlist: MoviesWishlistService) {
    this.moviesList = _MoviesWishlist.displayMoviesList();
    this._MoviesWishlist.getCounter().subscribe((res) => {
      this.counter = res
    })

  }
  ngOnInit() {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('watchList');

    if (storedData) {
      // Parse the stored data into your component's variable
      this.moviesList = JSON.parse(storedData);
      
    }
  }

  handleAddtoWatchList(id: number) {
    if (this.moviesList.includes(this.movie)) {
console.log(this.moviesList.includes(this.movie));


    }
    else {
      this._MoviesWishlist.getMoviesList(this.movie)
      this.addedItem = true
      localStorage.setItem("flagIcon", JSON.stringify(this.addedItem))
      this._MoviesWishlist.setCounter(++this.counter)
      this.movieID = id
    }
    localStorage.setItem('watchList', JSON.stringify(this.moviesList));
  }
  handleRemove(id: number) {
    this._MoviesWishlist.removeItem(this.movie)
    this._MoviesWishlist.setCounter(--this.counter)
    this.addedItem = false
    localStorage.setItem("flagIcon", JSON.stringify(this.addedItem))
    this.movieID = id

  }
  // addToWishlist(movie: any) {
  //   if (!this.addedItem) {
  //     this._MoviesWishlist.getMoviesList(movie);
  //     this.addedItem = true;
  //   } else {
  //     this._MoviesWishlist.removeItem(movie);
  //     this.addedItem = false;
  //   }
  //   this._MoviesWishlist.setCounter(this._MoviesWishlist.displayMoviesList().length);
  // }
}

// export class CardComponent {
//   @Input() movie: any;
//   counter = 0
//   addedItem = false
//   moviesList: any
//   movieID: any
//   constructor(private _router: Router, private _MoviesWishlist: MoviesWishlistService) {
//     this.moviesList = _MoviesWishlist.displayMoviesList();
//   }

//   redirectToDetails(id: number) {
//     this._router.navigate(['movie-details', id]);
//   }

//   addToWishlist(movie: any) {
//     if (!this.addedItem) {
//       this._MoviesWishlist.getMoviesList(movie);
//       this.addedItem = true;
//       document.getElementById(movie.id)?.classList.add("clickedHeartIcon")

//     } else {
//       this._MoviesWishlist.removeItem(movie);
//       this.addedItem = false;
//       document.getElementById(movie.id)?.classList.add("heartIcon")

//     }

//     this._MoviesWishlist.setCounter(this._MoviesWishlist.displayMoviesList().length);
//   }
// }
