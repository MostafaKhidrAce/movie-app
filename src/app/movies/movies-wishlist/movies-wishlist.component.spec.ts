import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWishlistComponent } from './movies-wishlist.component';

describe('MoviesWishlistComponent', () => {
  let component: MoviesWishlistComponent;
  let fixture: ComponentFixture<MoviesWishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesWishlistComponent]
    });
    fixture = TestBed.createComponent(MoviesWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
