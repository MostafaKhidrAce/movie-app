import { Component } from '@angular/core';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  counter: any;

  constructor(private _MoviesWishlist: MoviesWishlistService) {
    this.counter = this._MoviesWishlist.counter;
  }
}
