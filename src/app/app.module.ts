import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { HttpModule } from '@angular/http';
import { WeatherApiService } from './weather-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SanJoseComponent,
    SeattleComponent,
    BurbankComponent,
    DallasComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
