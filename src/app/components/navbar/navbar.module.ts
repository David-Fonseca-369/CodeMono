import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule //Para que no tenga problemas con la navegación externa del modulo.
  ], exports:[
    NavbarComponent //Exportamos la información que pase en este modulo.
  ]
})
export class NavbarModule { }
