import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';

import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { ToTemperaturePipe } from './pipes/to-temperature.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Demo6Component } from './demo6/demo6.component';
import { EnfantComponent } from './demo6/enfant/enfant.component';
import { Demo7Component } from './demo7/demo7.component';
import { LoginService } from './services/login.service';
import { Demo8Component } from './demo8/demo8.component';


@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    ToTemperaturePipe,
    Demo6Component,
    EnfantComponent,
    Demo7Component,
    Demo8Component
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule,
    ReactiveFormsModule,     // à jouter pour les formulaire
    SharedModule
  ],
  providers: [
    // Injection au niveau du module "Demos"
    LoginService      
    // -> à ajouter pour utiliser ce service dans tout le module "Demos"
    // + voir fichier Demos -> services -> login.service.ts
  ]
})
export class DemosModule { }
