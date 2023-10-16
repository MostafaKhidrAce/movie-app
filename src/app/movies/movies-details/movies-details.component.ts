import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDataService } from 'src/app/services/movies-data.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent {
  movieDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesDataService: MoviesDataService
  ) {}

  ngOnInit() {
    this.moviesDataService
      .getDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe((data: any) => {
        this.movieDetails = data;
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



}
