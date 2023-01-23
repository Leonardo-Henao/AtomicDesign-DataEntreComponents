import { Component } from '@angular/core';
import { ItemChatComponent } from 'src/app/components/organismos/item-chat/item-chat.component';
import { ItemChatListModel } from 'src/app/Models/item-chat-list-model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'index-chat',
  templateUrl: './index-chat.component.html',
  styleUrls: ['./index-chat.component.scss']
})
export class IndexChatComponent {

  listChats: ItemChatListModel[] = [];

  constructor(private $chatService: ChatService) { }

  ngOnInit() {
    this.$chatService.obtenerConversaciones().forEach(item => this.listChats.push(item));
  }

}
