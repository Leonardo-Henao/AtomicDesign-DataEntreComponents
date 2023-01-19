import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-view-reset',
  templateUrl: './text-view-reset.component.html',
  styleUrls: ['./text-view-reset.component.scss']
})
export class TextViewResetComponent {

  @Input()
  valueText?: string;

  // Ancho del texto
  @Input()
  sizeText?: string;

  // Tamaño de fuente
  @Input()
  fontSize? : string;

  setSizeText() {
    const lengthSizeText = this.sizeText?.length;
    if (this.sizeText == null || lengthSizeText == 0) return 'width: 100%';
    else return `width: ${this.sizeText}%`;
  }
  
  setFontSize() {
    const lengthFontSize = this.fontSize?.length;
    if (this.fontSize == null || lengthFontSize == 0) return 'font-size: 0.8rem';
    else return `font-size: ${this.fontSize}rem`;
  }
}
