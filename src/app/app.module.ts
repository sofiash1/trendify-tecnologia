import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { headerComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TipsComponent } from './components/tips/tips.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    BarraLateralComponent,
    headerComponent,
    FooterComponent,
    TipsComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 👈 Esto es lo nuevo

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
