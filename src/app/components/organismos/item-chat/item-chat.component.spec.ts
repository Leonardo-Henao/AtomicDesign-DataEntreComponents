import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChatComponent } from './item-chat.component';

describe('ItemChatComponent', () => {
  let component: ItemChatComponent;
  let fixture: ComponentFixture<ItemChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
