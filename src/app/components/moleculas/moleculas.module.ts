import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsNavbarUserComponent } from './buttons-navbar-user/buttons-navbar-user.component';
import { AtomosModule } from '../atomos/atomos.module';
import {
  matGroups2Round,
  matFilterTiltShiftRound,
  matChatRound,
  matSearchRound,
  matKeyboardArrowDownRound
} from '@ng-icons/material-icons/round'
import { bootstrapThreeDotsVertical } from '@ng-icons/bootstrap-icons'
import { NgIconsModule } from '@ng-icons/core';
import { GroupSearchComponent } from './group-search/group-search.component';
import { InfoChatComponent } from './info-chat/info-chat.component';

@NgModule({
  declarations: [
    ButtonsNavbarUserComponent,
    GroupSearchComponent,
    InfoChatComponent
  ],
  imports: [
    CommonModule,
    AtomosModule,
    NgIconsModule.withIcons({
      matGroups2Round,
      matFilterTiltShiftRound,
      matChatRound,
      bootstrapThreeDotsVertical,
      matSearchRound,
      matKeyboardArrowDownRound
    })
  ],
  exports: [
    ButtonsNavbarUserComponent,
    GroupSearchComponent,
    InfoChatComponent
  ]
})
export class MoleculasModule { }
