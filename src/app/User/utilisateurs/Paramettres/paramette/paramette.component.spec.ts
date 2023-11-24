import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametteComponent } from './paramette.component';

describe('ParametteComponent', () => {
  let component: ParametteComponent;
  let fixture: ComponentFixture<ParametteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametteComponent]
    });
    fixture = TestBed.createComponent(ParametteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
