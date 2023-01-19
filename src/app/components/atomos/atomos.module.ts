import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUserComponent } from './photo-user/photo-user.component';
import { heroUserCircle } from '@ng-icons/heroicons/outline'
import { NgIconsModule } from '@ng-icons/core';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { TextViewResetComponent } from './text-view-reset/text-view-reset.component';
import { InputTextBasicComponent } from './input-text-basic/input-text-basic.component';
import { TextViewboldComponent } from './text-view-bold/text-view-bold.component';

@NgModule({
  declarations: [
    PhotoUserComponent,
    ButtonIconComponent,
    TextViewboldComponent,
    InputTextBasicComponent,
    TextViewResetComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      heroUserCircle
    })
  ],
  exports: [
    ButtonIconComponent,
    PhotoUserComponent,
    InputTextBasicComponent,
    TextViewboldComponent,
    TextViewResetComponent
  ]
})
export class AtomosModule { }
