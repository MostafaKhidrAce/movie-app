import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private _httpClient: HttpClient) { }
  
  getPopular():Observable<any> {
    return this._httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=c3e181b664d96dbfc2a8921182cc0c6a&page=1');
  }
  getDetails(id:number):Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c3e181b664d96dbfc2a8921182cc0c6a`);
  }
  getRecommended(movie_id:number):Observable<any> {
    return this._httpClient.get(`
    https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=c3e181b664d96dbfc2a8921182cc0c6a`);
  }
}
