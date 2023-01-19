import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss']
})
export class ItemChatComponent {

  @Input()
  srcPhotoUser?: string;

  @Input()
  nameUser?: string;

  @Input()
  timeMessage?: string;

}
