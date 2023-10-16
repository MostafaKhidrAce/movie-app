import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesWishlistService {
  counter = new BehaviorSubject<any>(0)

  increaseCounter(counter: number) {
    this.counter.next(counter);
  }
  decreaseCounter(counter: number) {
    this.counter.next(counter);
  }

  constructor() { }
}
