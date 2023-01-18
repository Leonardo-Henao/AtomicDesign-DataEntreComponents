import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUserComponent } from './photo-user/photo-user.component';
import { heroUserCircle } from '@ng-icons/heroicons/outline'
import { NgIconsModule } from '@ng-icons/core';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { GroupSearchComponent } from '../moleculas/group-search/group-search.component';
import { InputTextPrincipalComponent } from './input-text-principal/input-text-principal.component';
import { InputTextSecondaryComponent } from './input-text-secondary/input-text-secondary.component';

@NgModule({
  declarations: [
    PhotoUserComponent,
    ButtonIconComponent,
    InputSearchComponent,
    InputTextPrincipalComponent,
    InputTextSecondaryComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroUserCircle
    })
  ],
  exports:[
    ButtonIconComponent,
    PhotoUserComponent,
    InputSearchComponent,
    InputTextPrincipalComponent,
    InputTextSecondaryComponent
  ]
})
export class AtomosModule { }
