import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  counter = new BehaviorSubject<number>(0).value
  moviesList: any

  constructor(private _MoviesWishlist: MoviesWishlistService) {
    _MoviesWishlist.getCounter().subscribe(res => {
      this.counter = res

    })
    if (localStorage.getItem("moviesListCounter") != null) {
      this.counter = Number(localStorage.getItem("moviesListCounter"))
    }
  }
}




