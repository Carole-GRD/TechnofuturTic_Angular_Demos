import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToChronoPipe } from './pipe/to-chrono.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ToChronoPipe,
    NavbarComponent,
    NotFoundComponent,
    BasicLayoutComponent,
    HomeComponent
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
