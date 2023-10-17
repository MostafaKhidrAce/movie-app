import { PageNotFoundComponent } from './../shared/page-not-found/page-not-found.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesWishlistService {
  counter = new BehaviorSubject<number>(0)
  sendToWatchList: any[] = [];
  constructor() {
    localStorage.setItem("moviesList", JSON.stringify(this.sendToWatchList))
  }
  getMoviesList(item: any) {
    this.sendToWatchList.push(item);

  }

  displayMoviesList() {
    return this.sendToWatchList;
  }
  setCounter(counter: number) {
    this.counter.next(counter)
    localStorage.setItem("moviesListCounter", JSON.stringify(this.sendToWatchList.length))

  }
  getCounter(): Observable<any> {
    return this.counter;
  }
}