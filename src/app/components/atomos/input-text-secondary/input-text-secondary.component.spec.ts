import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextSecondaryComponent } from './input-text-secondary.component';

describe('InputTextSecondaryComponent', () => {
  let component: InputTextSecondaryComponent;
  let fixture: ComponentFixture<InputTextSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextSecondaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
