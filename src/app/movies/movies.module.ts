import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { CardComponent } from './card/card.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesWishlistComponent } from './movies-wishlist/movies-wishlist.component';


@NgModule({
  declarations: [
    MoviesComponent,
    CardComponent,
    MoviesDetailsComponent,
    MoviesWishlistComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports:[
    MoviesComponent,
    CardComponent,
    MoviesDetailsComponent,
    MoviesWishlistComponent
  ]
})
export class MoviesModule { }
