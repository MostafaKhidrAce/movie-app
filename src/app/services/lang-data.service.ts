import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('en-US');

  constructor() {}

  setLanguage(language: string) {
    this.languageSubject.next(language);
  }

  getLanguage(): Observable<string> {
    return this.languageSubject.asObservable();
  }
}
