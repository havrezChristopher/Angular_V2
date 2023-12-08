import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteDeReceptionComponent } from './boite-de-reception.component';

describe('BoiteDeReceptionComponent', () => {
  let component: BoiteDeReceptionComponent;
  let fixture: ComponentFixture<BoiteDeReceptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoiteDeReceptionComponent]
    });
    fixture = TestBed.createComponent(BoiteDeReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
