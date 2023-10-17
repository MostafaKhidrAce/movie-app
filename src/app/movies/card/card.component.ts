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
  movieID !: number

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
 
  ngOnChanges(changes: SimpleChanges): void {
  console.log(this.addedItem,changes);
  
  
  }
  handleAddtoWatchList(id: number) {
    if (this.moviesList.includes(this.movie)) { }
    else {
      this._MoviesWishlist.getMoviesList(this.movie)
      this.movie.watchList=true
      this.addedItem = true
      localStorage.setItem("flagIcon", JSON.stringify(this.addedItem))
      this._MoviesWishlist.setCounter(++this.counter)
      this.movieID = id

    }

  }
  handleRemove(id: number) {
    this._MoviesWishlist.removeItem(this.movie)
    this._MoviesWishlist.setCounter(--this.counter)
    this.addedItem = false
    this.movie.watchList=false

    localStorage.setItem("flagIcon", JSON.stringify(this.addedItem))


  }

}


