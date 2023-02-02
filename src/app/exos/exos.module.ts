import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';

import { InputComponent } from './exo1/input/input.component';
import { InfoUserComponent } from './exo1/info-user/info-user.component';
import { Exo1Component } from './exo1/exo1.component';
import { ChronoComponent } from './exo2/chrono/chrono.component';
import { ToChronoPipe } from './exo2/pipe/to-chrono.pipe';
import { SpoilComponent } from './exo3/spoil/spoil.component';
import { MenuComponent } from './exo4/menu/menu.component';
import { CoursComponent } from './exo5/cours/cours.component';


@NgModule({
  declarations: [
    InputComponent,
    InfoUserComponent,
    Exo1Component,
    ChronoComponent,
    ToChronoPipe,
    SpoilComponent,
    MenuComponent,
    CoursComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule
  ]
})
export class ExosModule { }
