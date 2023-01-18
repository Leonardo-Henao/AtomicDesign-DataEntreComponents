import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsNavbarUserComponent } from './buttons-navbar-user/buttons-navbar-user.component';
import { AtomosModule } from '../atomos/atomos.module';
import { matGroups2Round, matFilterTiltShiftRound, matChatRound } from '@ng-icons/material-icons/round'
import { bootstrapThreeDotsVertical } from '@ng-icons/bootstrap-icons'
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    ButtonsNavbarUserComponent
  ],
  imports: [
    CommonModule,
    AtomosModule,
    NgIconsModule.withIcons({
      matGroups2Round,
      matFilterTiltShiftRound,
      matChatRound,
      bootstrapThreeDotsVertical
    })
  ],
  exports: [
    ButtonsNavbarUserComponent
  ]
})
export class MoleculasModule { }
