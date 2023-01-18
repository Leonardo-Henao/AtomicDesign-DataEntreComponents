import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { AtomosModule } from '../atomos/atomos.module';
import { MoleculasModule } from '../moleculas/moleculas.module';
import { NavbarSearchFilterComponent } from './navbar-search-filter/navbar-search-filter.component';
import { matFilterListRound } from '@ng-icons/material-icons/round'
import { NgIconsModule } from '@ng-icons/core';
import { ItemChatComponent } from './item-chat/item-chat.component';

@NgModule({
  declarations: [
    NavbarUserComponent,
    NavbarSearchFilterComponent,
    ItemChatComponent
  ],
  imports: [
    CommonModule,
    AtomosModule,
    MoleculasModule,
    NgIconsModule.withIcons({
      matFilterListRound
    })
  ],
  exports: [
    NavbarUserComponent,
    NavbarSearchFilterComponent,
    ItemChatComponent
  ]
})
export class OrganismosModule { }
