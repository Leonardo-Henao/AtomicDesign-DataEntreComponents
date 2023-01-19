import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextBasicComponent } from './input-text-basic.component';

describe('InputSearchComponent', () => {
  let component: InputTextBasicComponent;
  let fixture: ComponentFixture<InputTextBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
