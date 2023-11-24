import { TestBed } from '@angular/core/testing';

import { ParametteServicesService } from './paramette.services.service';

describe('ParametteServicesService', () => {
  let service: ParametteServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParametteServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
