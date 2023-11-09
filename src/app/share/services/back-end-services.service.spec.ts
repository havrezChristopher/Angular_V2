import { TestBed } from '@angular/core/testing';

import { BackEndServicesService } from './back-end-services.service';

describe('BackEndServicesService', () => {
  let service: BackEndServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackEndServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
