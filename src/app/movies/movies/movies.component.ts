import { MoviesDataService } from './../../services/movies-data.service';
import { Component } from '@angular/core';
import { Movieface } from 'src/app/interface/movieface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  pages: Array<number> = [];
  moviesList!:Array<Movieface>;
constructor(private _MoviesDataService:MoviesDataService){
  this.pages=new Array(10).fill("").map((ele,index)=>index+1)
}
ngOnInit(): void {
  this.getMovies(1);
}
getMovies(page:number){
  this._MoviesDataService.getPopular(page).subscribe({
    next:(data:any)=>{console.log(data.results)
      this.moviesList=data.results;
    }

    })
}
}
