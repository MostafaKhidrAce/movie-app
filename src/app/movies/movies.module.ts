import { SearchPipe } from './../search.pipe';
// Module

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
// component
import { MoviesComponent } from './movies/movies.component';
import { CardComponent } from './card/card.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesWishlistComponent } from './movies-wishlist/movies-wishlist.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    MoviesComponent,
    CardComponent,
    MoviesDetailsComponent,
    MoviesWishlistComponent, SearchPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule, FormsModule,

  ],
  exports: [
    MoviesComponent,
    CardComponent,
    MoviesDetailsComponent,
    MoviesWishlistComponent
  ]
})
export class MoviesModule { }
