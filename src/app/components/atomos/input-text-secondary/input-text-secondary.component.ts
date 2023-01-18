import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-text-secondary',
  templateUrl: './input-text-secondary.component.html',
  styleUrls: ['./input-text-secondary.component.scss']
})
export class InputTextSecondaryComponent {

  @Input()
  valueText?: string;

  @Input()
  sizeText?: string;

  setSizeText() {
    const lengthSizeText = this.sizeText?.length;
    if (this.sizeText == null || lengthSizeText == 0) return 'width: 100%';
    else return `width: ${this.sizeText}%`;
  }

}
