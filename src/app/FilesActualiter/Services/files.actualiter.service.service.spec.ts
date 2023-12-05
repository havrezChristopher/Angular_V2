import { TestBed } from '@angular/core/testing';

import { FilesActualiterServiceService } from './files.actualiter.service.service';

describe('FilesActualiterServiceService', () => {
  let service: FilesActualiterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesActualiterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
