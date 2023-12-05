import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementTop2Component } from './evenement-top2.component';

describe('EvenementTop2Component', () => {
  let component: EvenementTop2Component;
  let fixture: ComponentFixture<EvenementTop2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementTop2Component]
    });
    fixture = TestBed.createComponent(EvenementTop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
