import { TestBed } from '@angular/core/testing';

import { EvenementsServiceService } from './evenements.service.service';

describe('EvenementsServiceService', () => {
  let service: EvenementsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvenementsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
