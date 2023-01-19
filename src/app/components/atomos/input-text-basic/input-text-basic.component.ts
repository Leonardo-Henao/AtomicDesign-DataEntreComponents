import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-text-basic',
  templateUrl: './input-text-basic.component.html',
  styleUrls: ['./input-text-basic.component.scss']
})
export class InputTextBasicComponent {

  @Input()
  placeHolder?: string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(event: any){  
    this.messageEvent.emit(event.target.value)
  }

}
