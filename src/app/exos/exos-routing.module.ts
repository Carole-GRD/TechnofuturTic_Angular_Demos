import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Exo1Component } from './exo1/exo1.component';
import { ChronoComponent } from './exo2/chrono/chrono.component';
import { SpoilComponent } from './exo3/spoil/spoil.component';
import { MenuComponent } from './exo4/menu/menu.component';
import { CoursComponent } from './exo5/cours/cours.component';


const routes: Routes = [
  { path: 'exo1', component: Exo1Component },
  { path: 'exo2', component: ChronoComponent },
  { path: 'exo3', component: SpoilComponent },
  { path: 'exo4', component: MenuComponent },
  { path: 'exo5', component: CoursComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }