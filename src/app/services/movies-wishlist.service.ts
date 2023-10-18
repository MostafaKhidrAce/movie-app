import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesWishlistService {
  counter = new BehaviorSubject<number>(0);
  sendToWatchList: any[] = [];

  constructor() {
    this.getCounter();
  }

  resetWishlist() {
    this.sendToWatchList = [];
    this.counter.next(0);
    localStorage.removeItem("moviesList");
    localStorage.removeItem("moviesListCounter");
  }

  getMoviesList(item: any) {
    this.sendToWatchList.push(item);
    localStorage.setItem("moviesList", JSON.stringify(this.sendToWatchList));
  }

  removeItem(item: any) {
    const index = this.sendToWatchList.indexOf(item);
    this.sendToWatchList.splice(index, 1);
    localStorage.setItem("moviesList", JSON.stringify(this.sendToWatchList));
  }

  displayMoviesList() {
    return this.sendToWatchList;
  }

  setCounter(counter: number) {
    this.counter.next(counter);
    localStorage.setItem("moviesListCounter", JSON.stringify(this.sendToWatchList.length));
  }

  getCounter(): BehaviorSubject<number> {
    if (localStorage.getItem('moviesList') != null) {
      this.sendToWatchList = JSON.parse(localStorage.getItem('moviesList') || '[]');
      this.counter.next(this.sendToWatchList.length);
      return this.counter;
    }

    return this.counter;
  }
}
