import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export const LANGUAGE_SERVICE = new InjectionToken<LanguageService>('LANGUAGE_SERVICE');

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
