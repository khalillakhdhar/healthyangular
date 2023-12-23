import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcComponent } from './imc/imc.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { GlycemieComponent } from './glycemie/glycemie.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImcComponent,
    TemperatureComponent,
    GlycemieComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
