import { Component, Input } from '@angular/core';

@Component({
  selector: 'bottom-bar-chat',
  templateUrl: './bottom-bar-chat.component.html',
  styleUrls: ['./bottom-bar-chat.component.scss']
})
export class BottomBarChatComponent {

  PrepareToSendMessage = false;

  receivedMessage(event: string) {

    const lenghtEvent = event.length;

    if (lenghtEvent > 0) this.PrepareToSendMessage = true;
    else this.PrepareToSendMessage = false;

  }
}
