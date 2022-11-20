import { TestBed } from '@angular/core/testing';

import { CardproductService } from './product.service';

describe('CardproductService', () => {
  let service: CardproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
