import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsNavbarUserComponent } from './buttons-navbar-user.component';

describe('ButtonsNavbarUserComponent', () => {
  let component: ButtonsNavbarUserComponent;
  let fixture: ComponentFixture<ButtonsNavbarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsNavbarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsNavbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
