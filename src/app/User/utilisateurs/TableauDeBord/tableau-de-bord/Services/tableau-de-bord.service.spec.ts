import { TestBed } from '@angular/core/testing';

import { TableauDeBordService } from './tableau-de-bord.service';

describe('TableauDeBordService', () => {
  let service: TableauDeBordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableauDeBordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
