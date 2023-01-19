import { Component, Input } from '@angular/core';

@Component({
  selector: 'bubble-chat',
  templateUrl: './bubble-chat.component.html',
  styleUrls: ['./bubble-chat.component.scss']
})
export class BubbleChatComponent {

  @Input()
  sendMessage?: boolean;

  @Input()
  timeMessage?: string;

  @Input()
  message?: string;

}
