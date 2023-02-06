import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToChronoPipe } from './pipe/to-chrono.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToChronoPipe,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,      //  impoter le RouterModule !  
    FormsModule
  ],
  exports: [
    ToChronoPipe,
    NavbarComponent,
    FormsModule
  ]
})
export class SharedModule { }
