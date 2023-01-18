import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {

  @Input()
  nameIcon?: string;

  @Input()
  titleButton?: string;

  @Input()
  sizeIcon?: string;

  setSizeIcon() {
    const lengthSizeIcon = this.sizeIcon?.length;
    if (this.sizeIcon == null || lengthSizeIcon == 0) return 'font-size: 1.3rem';
    else return `font-size: ${this.sizeIcon}rem`;
  }

}
