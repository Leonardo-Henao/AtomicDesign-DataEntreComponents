import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {

  @Input()
  nameIcon!: string;

  @Input()
  titleButton!: string;

}
