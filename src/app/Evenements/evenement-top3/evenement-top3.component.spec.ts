import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementTop3Component } from './evenement-top3.component';

describe('EvenementTop3Component', () => {
  let component: EvenementTop3Component;
  let fixture: ComponentFixture<EvenementTop3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementTop3Component]
    });
    fixture = TestBed.createComponent(EvenementTop3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
