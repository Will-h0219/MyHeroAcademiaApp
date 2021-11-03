import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../../data/auth/interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth: Auth = {
    userEmail: "",
    userPassword: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.auth)
  }

}
