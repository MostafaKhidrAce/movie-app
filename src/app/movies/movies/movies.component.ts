import { Movieface } from './../../interface/movieface';
import { MoviesDataService } from './../../services/movies-data.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
@Input () movieId !:number
pagination:boolean=true;
  term: string = "";
  pages: Array<number> = [];
  moviesList!: Array<Movieface>;
  constructor(private _MoviesDataService: MoviesDataService) {
    this.pages = new Array(10).fill("").map((ele, index) => index + 1)

  }
  ngOnInit(): void {
    this.getMovies(1);
  }
  getMovies(page: number) {
    this._MoviesDataService.getPopular(page).subscribe({
      next: (data: any) => {
        console.log(data.results)
        this.moviesList = data.results;
      }

    })
  }
  searchMovie() {
    console.log('hello');
    this._MoviesDataService.getSearchMovie(this.term).subscribe({
      next: (data: any) => {
        console.log(data.results);
        if (this.term == '') {
          this.getMovies(1);
          this.pagination = true;
        } else {
          this.moviesList = data.results;
          this.pagination = false;
        }
      },
    });
  }
  search() {
    console.log('g');

    if (this.term) {
      this.pagination=false;
      this._MoviesDataService.getSearchMovie(this.term).subscribe({
        next: (data: any) => {
          console.log(data.results);
          this.moviesList = data.results;

        },
      });
    } else {
      this.pagination=true;

      this.getMovies(1);
    }
  }


}
