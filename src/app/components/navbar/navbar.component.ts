import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  registered: boolean = false;
  title = 'codeMono_landing';
  auth: any = '';
  username: any;
  constructor() {}

  ngOnInit(): void {
    this.auth = localStorage.getItem('username');

    if (this.auth !== null) {
      this.username = this.auth;
      this.registered = true;
    }
  }
}
