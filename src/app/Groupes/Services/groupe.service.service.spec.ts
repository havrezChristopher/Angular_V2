import { TestBed } from '@angular/core/testing';

import { GroupeServiceService } from './groupe.service.service';

describe('GroupeServiceService', () => {
  let service: GroupeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
