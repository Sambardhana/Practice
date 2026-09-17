import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private router: Router) {}

  onLoginSubmit() {
    console.log('Login button clicked!');
   
  }
}