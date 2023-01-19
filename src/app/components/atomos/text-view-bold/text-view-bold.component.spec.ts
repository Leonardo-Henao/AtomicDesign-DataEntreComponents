import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextViewboldComponent } from './text-view-bold.component';

describe('TextViewboldComponent', () => {
  let component: TextViewboldComponent;
  let fixture: ComponentFixture<TextViewboldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextViewboldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextViewboldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
