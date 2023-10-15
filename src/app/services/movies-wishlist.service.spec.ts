import { TestBed } from '@angular/core/testing';

import { MoviesWishlistService } from './movies-wishlist.service';

describe('MoviesWishlistService', () => {
  let service: MoviesWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
