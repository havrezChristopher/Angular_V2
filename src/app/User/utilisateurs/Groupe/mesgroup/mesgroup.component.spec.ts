import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesgroupComponent } from './mesgroup.component';

describe('MesgroupComponent', () => {
  let component: MesgroupComponent;
  let fixture: ComponentFixture<MesgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesgroupComponent]
    });
    fixture = TestBed.createComponent(MesgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
