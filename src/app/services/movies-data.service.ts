import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from './lang-data.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  private apiKey = 'c3e181b664d96dbfc2a8921182cc0c6a';

  constructor(private _httpClient: HttpClient, private languageService: LanguageService) {}

  getPopular(page: number): Observable<any> {
    return this.languageService.getLanguage().pipe(
      switchMap(language => {
        return this._httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${page}&language=${language}`);
      })
    );
  }

  getDetails(id: number): Observable<any> {
    return this.languageService.getLanguage().pipe(
      switchMap(language => {
        return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=${language}`);
      })
    );
  }

  getRecommended(movie_id: number): Observable<any> {
    return this.languageService.getLanguage().pipe(
      switchMap(language => {
        return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${this.apiKey}&language=${language}`);
      })
    );
  }

  getSearchMovie(MovieName: string): Observable<any> {
    return this.languageService.getLanguage().pipe(
      switchMap(language => {
        return this._httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${MovieName}&language=${language}`);
      })
    );
  }
}
