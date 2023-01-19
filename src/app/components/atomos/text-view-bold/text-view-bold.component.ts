import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-text-principal',
  templateUrl: './text-view-bold.component.html',
  styleUrls: ['./text-view-bold.component.scss']
})
export class TextViewboldComponent {
  @Input()
  nameUser!: string;
}
