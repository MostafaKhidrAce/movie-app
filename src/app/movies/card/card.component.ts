import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private _router: Router) { }
  @Input() movie: any;
  redirectToDetails(id: number) {
    console.log(id);
    this._router.navigate(['movie-details', id]);
  }

}
