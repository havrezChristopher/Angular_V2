import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreeMessageComponent } from './cree-message.component';

describe('CreeMessageComponent', () => {
  let component: CreeMessageComponent;
  let fixture: ComponentFixture<CreeMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreeMessageComponent]
    });
    fixture = TestBed.createComponent(CreeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
