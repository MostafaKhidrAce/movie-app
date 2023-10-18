import { Component } from '@angular/core';
import { LanguageService, LANGUAGE_SERVICE } from 'src/app/services/lang-data.service';
import { MoviesWishlistService } from 'src/app/services/movies-wishlist.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  counter: any;
  selectedLanguage: string = 'en-US'

  constructor(private _MoviesWishlist: MoviesWishlistService,private languageService: LanguageService) {
    this.counter = this._MoviesWishlist.counter;
  }

  toggleLanguage(language: string) {
        this.languageService.setLanguage(language);
        if(this.selectedLanguage === 'en-US'){
          this.selectedLanguage = 'ar'
        }else{
          this.selectedLanguage = 'en-US'
        }
      }
}


