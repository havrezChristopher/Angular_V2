import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementTop1Component } from './evenement-top1.component';

describe('EvenementTop1Component', () => {
  let component: EvenementTop1Component;
  let fixture: ComponentFixture<EvenementTop1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementTop1Component]
    });
    fixture = TestBed.createComponent(EvenementTop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
