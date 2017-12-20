import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {

  constructor (
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit () {}

  login (f) {
    if (f.valid) {
      const email = f.controls.email.value;
      const password = f.controls.password.value;
      this.auth.login(email, password).subscribe(loggedIn => {
        if (loggedIn) {
          this.router.navigate(['/']);
        } else {
          f.form.setErrors({invalidLogin: true});
        }
      });
    }
    return false;
  }

}

