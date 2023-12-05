import { TestBed } from '@angular/core/testing';

import { EvenementTop1ServicesService } from './evenement-top1.services.service';

describe('EvenementTop1ServicesService', () => {
  let service: EvenementTop1ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementTop1ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
