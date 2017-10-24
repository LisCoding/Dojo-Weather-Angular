import { NgModule } from '@angular/core';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
[
{
  path: "",
  pathMatch: 'full',
  component: SanJoseComponent,
  children:[]
},
{
  path: "seattle",
  pathMatch: 'full',
  component: SeattleComponent,
  children:[]
},
{
  path: "burbank",
  pathMatch: 'full',
  component: BurbankComponent,
  children:[]
},
{
  path: "chicago",
  pathMatch: 'full',
  component: ChicagoComponent,
  children:[]
},
{
  path: "dallas",
  pathMatch: 'full',
  component: DallasComponent,
  children:[]
},
{
  path: "washington",
  pathMatch: 'full',
  component: WashingtonComponent,
  children:[]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
