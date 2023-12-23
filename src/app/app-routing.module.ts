import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './imc/imc.component';
import { GlycemieComponent } from './glycemie/glycemie.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  {path:'', redirectTo:'imc', pathMatch:'full'},
  {path:'imc', component: ImcComponent},
  { path:'glycemie',component:GlycemieComponent},
  {path:'temperature',component:TemperatureComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
