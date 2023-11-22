import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUtilisateursComponent } from './profile.utilisateurs.component';

describe('ProfileUtilisateursComponent', () => {
  let component: ProfileUtilisateursComponent;
  let fixture: ComponentFixture<ProfileUtilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUtilisateursComponent]
    });
    fixture = TestBed.createComponent(ProfileUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
