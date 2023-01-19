import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { AtomosModule } from '../atomos/atomos.module';
import { MoleculasModule } from '../moleculas/moleculas.module';
import { NavbarSearchFilterComponent } from './navbar-search-filter/navbar-search-filter.component';

import { matFilterListRound, matMicRound } from '@ng-icons/material-icons/round'
import { matTagFacesOutline } from "@ng-icons/material-icons/outline";
import { matSend } from "@ng-icons/material-icons/baseline";
import { heroPaperClip } from "@ng-icons/heroicons/outline";
import { bootstrapCheck2All } from "@ng-icons/bootstrap-icons";

import { NgIconsModule } from '@ng-icons/core';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { BottomBarChatComponent } from './bottom-bar-chat/bottom-bar-chat.component';
import { BubbleChatComponent } from './bubble-chat/bubble-chat.component';

@NgModule({
  declarations: [
    NavbarUserComponent,
    NavbarSearchFilterComponent,
    ItemChatComponent,
    BottomBarChatComponent,
    BubbleChatComponent
  ],
  imports: [
    CommonModule,
    AtomosModule,
    MoleculasModule,
    NgIconsModule.withIcons({
      matFilterListRound,
      matTagFacesOutline,
      heroPaperClip,
      matMicRound,
      matSend,
      bootstrapCheck2All
    })
  ],
  exports: [
    NavbarUserComponent,
    NavbarSearchFilterComponent,
    ItemChatComponent,
    BottomBarChatComponent,
    BubbleChatComponent
  ]
})
export class OrganismosModule { }
