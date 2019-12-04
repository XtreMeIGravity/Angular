import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material.module';
import { FotosComponent } from './componentes/fotos/fotos.component';

@NgModule({
  declarations: [AppComponent, Componente1Component, FotosComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
