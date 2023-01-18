import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextPrincipalComponent } from './input-text-principal.component';

describe('InputTextPrincipalComponent', () => {
  let component: InputTextPrincipalComponent;
  let fixture: ComponentFixture<InputTextPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
