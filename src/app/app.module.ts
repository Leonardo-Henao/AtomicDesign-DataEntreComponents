import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomosModule } from './components/atomos/atomos.module';
import { MoleculasModule } from './components/moleculas/moleculas.module';
import { OrganismosModule } from './components/organismos/organismos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AtomosModule,
    // MoleculasModule,
    OrganismosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
