import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { AtomosModule } from '../atomos/atomos.module';
import { MoleculasModule } from '../moleculas/moleculas.module';



@NgModule({
  declarations: [
    NavbarUserComponent
  ],
  imports: [
    CommonModule,
    AtomosModule,
    MoleculasModule
  ],
  exports:[
    NavbarUserComponent
  ]
})
export class OrganismosModule { }
