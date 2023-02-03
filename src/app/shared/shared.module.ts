import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToChronoPipe } from './pipe/to-chrono.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToChronoPipe,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule      //  impoter le RouterModule !  
  ],
  exports: [
    ToChronoPipe,
    NavbarComponent
  ]
})
export class SharedModule { }
