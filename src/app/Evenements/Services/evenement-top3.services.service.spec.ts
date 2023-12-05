import { TestBed } from '@angular/core/testing';

import { EvenementTop3ServicesService } from './evenement-top3.services.service';

describe('EvenementTop3ServicesService', () => {
  let service: EvenementTop3ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementTop3ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
