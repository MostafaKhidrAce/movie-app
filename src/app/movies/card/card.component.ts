import { Component, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private _router: Router, private _MoviesWishlist: MoviesWishlistService) {
    
   }

  @Input() movie: any;
  redirectToDetails(id: number) {
    this._router.navigate(['movie-details', id]);
  }


  toggleIcon() {
    document.getElementById(this.movie.id)?.classList.toggle("clickedHeartIcon");
    this._MoviesWishlist.getMoviesList(this.movie)


  }

}
