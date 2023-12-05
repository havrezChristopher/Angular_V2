import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesActualiterComponent } from './files.actualiter.component';

describe('FilesActualiterComponent', () => {
  let component: FilesActualiterComponent;
  let fixture: ComponentFixture<FilesActualiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilesActualiterComponent]
    });
    fixture = TestBed.createComponent(FilesActualiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
