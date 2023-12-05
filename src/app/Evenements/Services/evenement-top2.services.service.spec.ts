import { TestBed } from '@angular/core/testing';

import { EvenementTop2ServicesService } from './evenement-top2.services.service';

describe('EvenementTop2ServicesService', () => {
  let service: EvenementTop2ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementTop2ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
