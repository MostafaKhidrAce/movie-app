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
      console.log(this.movieDetails)
  }


}
