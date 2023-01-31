import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { InputComponent } from './exos/exo1/input/input.component';
import { InfoUserComponent } from './exos/exo1/info-user/info-user.component';
import { Exo1Component } from './exos/exo1/exo1.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    InputComponent,
    InfoUserComponent,
    Exo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
