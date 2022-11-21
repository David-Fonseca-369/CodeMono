import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;
  frmRegister = this.formBuilder.group({
    firstName: ['David', Validators.required],
    lastName: ['Fonseca', Validators.required],
    username: [
      'fonsecasoundcruz@gmail.com',
      [Validators.required, Validators.email],
    ],
    password: ['123', Validators.required],
    reTypePassword: ['123', Validators.required],
    avatar: [null],
    terms: [false, Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.frmRegister);

    if (this.frmRegister.invalid) {
      //Detecta lo que se encuentro dentro del contenedor de lado
      //del HTML 'container-form'
      //Lo especificamos en 0, porque no estamos trayendo mas agrupaciones del formulario
      const form = document.getElementsByClassName(
        'container-form'
      )[0] as HTMLFormElement;

      form.classList.add('was-validated');
      return;
    }

    if (
      this.frmRegister.value.password !== this.frmRegister.value.reTypePassword
    ) {
      console.log("The password doesn't match");

      Swal.fire('', "The password doesn't match", 'info');
    }

    if (this.frmRegister.value.terms == false) {
      console.log('Favor de aceptar los términos.');
      return;
    }

    if (this.frmRegister.valid) {
      Swal.fire(
        '',
        'Thank you for registering at now you can login',
        'success'
      ).then(() => {
        this.router.navigate(['/account/login']);
      });
    } else {
      console.log('Usuario no registrado.');
    }
  }
}
