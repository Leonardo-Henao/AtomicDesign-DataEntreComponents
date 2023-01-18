import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-text-principal',
  templateUrl: './input-text-principal.component.html',
  styleUrls: ['./input-text-principal.component.scss']
})
export class InputTextPrincipalComponent {

  @Input()
  nameUser!: string;
  
}
