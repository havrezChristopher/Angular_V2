import { TestBed } from '@angular/core/testing';

import { ContactFormServiceService } from './contact-form.service.service';

describe('ContactFormServiceService', () => {
  let service: ContactFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
