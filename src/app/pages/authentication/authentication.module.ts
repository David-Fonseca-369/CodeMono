import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    //Los declaramos aquí, esto debido a que en solo se aplicaran formularios en este proyecto y no tiene sentido
    //que sea igual en otros.
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
