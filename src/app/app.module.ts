import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { FelizComponent } from './components/feliz/feliz.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PruebaComponent,
    FelizComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
