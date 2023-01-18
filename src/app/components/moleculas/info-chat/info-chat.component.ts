import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-chat',
  templateUrl: './info-chat.component.html',
  styleUrls: ['./info-chat.component.scss']
})
export class InfoChatComponent {

  @Input()
  nameUser?: string;

  @Input()
  valueTime?: string;

  @Input()
  valueMessage?: string;
}
