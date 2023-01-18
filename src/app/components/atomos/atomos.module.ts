import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUserComponent } from './photo-user/photo-user.component';
import { heroUserCircle } from '@ng-icons/heroicons/outline'
import { NgIconsModule } from '@ng-icons/core';
import { ButtonIconComponent } from './button-icon/button-icon.component';

@NgModule({
  declarations: [
    PhotoUserComponent,
    ButtonIconComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroUserCircle
    })
  ],
  exports:[
    ButtonIconComponent,
    PhotoUserComponent
  ]
})
export class AtomosModule { }
