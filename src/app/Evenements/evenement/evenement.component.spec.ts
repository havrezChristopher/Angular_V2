import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementComponent } from './evenement.component';

describe('EvenementComponent', () => {
  let component: EvenementComponent;
  let fixture: ComponentFixture<EvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementComponent]
    });
    fixture = TestBed.createComponent(EvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
