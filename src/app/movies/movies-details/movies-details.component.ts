import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDataService } from 'src/app/services/movies-data.service';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent {
  movieDetails: any;
  recommendedMovies: any;
  moviesList: any
  addedItem = false
  counter = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesDataService: MoviesDataService,
    private _MoviesWishlist: MoviesWishlistService
  ) {
    this.moviesList = _MoviesWishlist.displayMoviesList();
    this._MoviesWishlist.getCounter().subscribe((res) => {
      this.counter = res
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params['id'];
      this.fetchMovieDetails(movieId);
    });
  }

  private fetchMovieDetails(movieId: number) {
    this.moviesDataService.getDetails(movieId).subscribe((data: any) => {
      this.movieDetails = data;
      this.fetchRecommendedMovies(this.movieDetails.id);
    });
  }

  private fetchRecommendedMovies(movieId: number) {
    this.moviesDataService.getRecommended(movieId).subscribe((recommendedData: any) => {
      this.recommendedMovies = recommendedData.results;
    });
  }

  getLanguages(): string {
    if (this.movieDetails.spoken_languages) {
      return this.movieDetails.spoken_languages
        .map((language: any) => language.english_name)
        .join(', ');
    }
    return 'N/A';
  }

  getRatingStars(): string {
    const rating = this.movieDetails.vote_average;
    const maxStars = 5;
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 !== 0;
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);
    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fa fa-star"></i>';
    }
    if (halfStar) {
      starsHtml += '<i class="fa fa-star-half-o"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="fa fa-star-o"></i>';
    }
    return starsHtml;
  }

  handleAddtoWatchList() {
    if (this.moviesList.includes(this.movieDetails)) { }
    else {
      this._MoviesWishlist.getMoviesList(this.movieDetails)
      this.addedItem = true
      localStorage.setItem("flagIcon", JSON.stringify(this.addedItem))
      this._MoviesWishlist.setCounter(++this.counter)
    }

  }
  handleRemove() {
    this._MoviesWishlist.removeItem(this.movieDetails)
    this._MoviesWishlist.setCounter(--this.counter)
    this.addedItem = false
    localStorage.setItem("flagIcon", JSON.stringify(this.addedItem))
  }


}
