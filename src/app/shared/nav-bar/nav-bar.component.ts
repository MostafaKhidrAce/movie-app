import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  counter: BehaviorSubject<number>;

  constructor(private _MoviesWishlist: MoviesWishlistService) {
    this.counter = this._MoviesWishlist.counter;
    this._MoviesWishlist.getCounter().subscribe(res => {
      this.counter.next(res);
    });
  }
}
// moviesList: any

// counter: BehaviorSubject<number>;

// constructor(private _MoviesWishlist: MoviesWishlistService) {
//   this.counter = this._MoviesWishlist.counter;
//   this._MoviesWishlist.getCounter().subscribe(res => {
//     this.counter.next(res);
//   })
// if (localStorage.getItem("moviesListCounter") != null) {
//   this.counter = Number(localStorage.getItem("moviesListCounter"))
// }






