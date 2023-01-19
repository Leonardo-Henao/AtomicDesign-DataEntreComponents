import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarChatComponent } from './bottom-bar-chat.component';

describe('BottomBarChatComponent', () => {
  let component: BottomBarChatComponent;
  let fixture: ComponentFixture<BottomBarChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBarChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomBarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
