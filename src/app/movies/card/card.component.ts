import { Component, EventEmitter, Input } from '@angular/core';
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
  constructor(private _router: Router, private _MoviesWishlist: MoviesWishlistService) {
    this.moviesList = _MoviesWishlist.displayMoviesList();
    this._MoviesWishlist.getCounter().subscribe((res) => {
      this.counter = res
    })
  }

  @Input() movie: any;
  redirectToDetails(id: number) {
    this._router.navigate(['movie-details', id]);
  }


  handleAddtoWatchList() {
    this._MoviesWishlist.getMoviesList(this.movie)
    this.addedItem = true
    this._MoviesWishlist.setCounter(++this.counter)

  }
  handleRemove() {
    this._MoviesWishlist.removeItem(this.movie)
    this._MoviesWishlist.setCounter(--this.counter)

    this.addedItem = false
  }

}


