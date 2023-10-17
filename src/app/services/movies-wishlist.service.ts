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
    this.getCounter()
  }
  getMoviesList(item: any) {
    this.sendToWatchList.push(item);
    localStorage.setItem("moviesList", JSON.stringify(this.sendToWatchList))

  }
  removeItem(item:any){
    const index=  this.sendToWatchList.indexOf(item);
    this.sendToWatchList.splice(index,1)
    localStorage.setItem("moviesList", JSON.stringify(this.sendToWatchList))
    
  }

  displayMoviesList() {
    return this.sendToWatchList;
  }
  setCounter(counter: number) {
    this.counter.next(counter)
    localStorage.setItem("moviesListCounter", JSON.stringify(this.sendToWatchList.length))
    

  }
  getCounter(): Observable<any> {
    this.sendToWatchList= JSON.parse(localStorage.getItem('moviesList') || '{}')
     this.counter.next(this.sendToWatchList.length)
     return this.counter


  }
}