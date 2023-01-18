import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {

  @Input()
  placeHolder!: string;

}
