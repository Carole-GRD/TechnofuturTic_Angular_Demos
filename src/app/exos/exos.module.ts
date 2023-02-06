import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';

import { InputComponent } from './exo1/input/input.component';
import { InfoUserComponent } from './exo1/info-user/info-user.component';
import { Exo1Component } from './exo1/exo1.component';
import { ChronoComponent } from './exo2/chrono/chrono.component';
import { SpoilComponent } from './exo3/spoil/spoil.component';
import { MenuComponent } from './exo4/menu/menu.component';
import { CoursComponent } from './exo5/cours/cours.component';
import { SharedModule } from '../shared/shared.module';
import { Exo6ServiceComponent } from './exo6-service/exo6-service.component';
import { BookServiceComponent } from './exo6-service/book-service/book-service.component';
import { Exo6Component } from './exo6/exo6.component';
import { BookComponent } from './exo6/book/book.component';
import { Exo7Component } from './exo7/exo7.component';
import { ProductComponent } from './exo7/product/product.component';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputComponent,
    InfoUserComponent,
    Exo1Component,
    ChronoComponent,
    SpoilComponent,
    MenuComponent,
    CoursComponent,
    Exo6ServiceComponent,
    BookServiceComponent,
    Exo6Component,
    BookComponent,
    Exo7Component,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    SharedModule
    // FormsModule
  ]
})
export class ExosModule { }
