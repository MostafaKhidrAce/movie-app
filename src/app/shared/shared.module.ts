import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LanguageService, LANGUAGE_SERVICE } from 'src/app/services/lang-data.service';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  providers: [
    LanguageService,
    { provide: LANGUAGE_SERVICE, useExisting: LanguageService },
  ],
  exports:[
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
