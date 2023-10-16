import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies/movies.component';
import { MoviesWishlistComponent } from './movies/movies-wishlist/movies-wishlist.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: MoviesComponent
  }, {
    path: "wish-list",
    component: MoviesWishlistComponent
  },{
    path: "movie-details/:id",
    component: MoviesDetailsComponent
  },{
    path: "**",
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
