import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMessageComponent } from './ajout-message.component';

describe('AjoutMessageComponent', () => {
  let component: AjoutMessageComponent;
  let fixture: ComponentFixture<AjoutMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutMessageComponent]
    });
    fixture = TestBed.createComponent(AjoutMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
