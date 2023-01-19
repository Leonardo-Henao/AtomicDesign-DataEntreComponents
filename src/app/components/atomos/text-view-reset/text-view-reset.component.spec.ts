import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextViewResetComponent } from './text-view-reset.component';

describe('InputTextSecondaryComponent', () => {
  let component: TextViewResetComponent;
  let fixture: ComponentFixture<TextViewResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextViewResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextViewResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
