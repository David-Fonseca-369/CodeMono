import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  frmLogin = this.formBuilder.group({
    username: [
      //si no que me detecte algo nulo con los pipes
      localStorage.getItem('username') || '',
      [Validators.required, Validators.email],
    ],
    password: ['123', Validators.required],
    remember: [false],
  });
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.frmLogin.invalid) {
      const form = document.getElementsByClassName(
        'container-form'
      )[0] as HTMLFormElement;

      form.classList.add('was-validated');
      return;
    }

    if (this.frmLogin.get('remember')?.value) {
      //u tipado any porque noo se sabe qeus e traera
      localStorage.setItem(
        'username',
        this.frmLogin.get<any>('username')?.value
      );
    } else {
      localStorage.removeItem('username');
    }

    if(this.frmLogin.valid){
      Swal.fire("", "Logged In", 'success').then(()=>{
        this.router.navigate(['/start']);
      });
    }else{
      console.log("Error")
    }


  }
}
