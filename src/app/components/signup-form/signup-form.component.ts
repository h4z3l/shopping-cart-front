import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidation } from '../../validators/password.validator';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  register(f) {
    const user: User = {
      firstname: f.controls.firstname.value,
      lastname: f.controls.lastname.value,
      email: f.controls.email.value,
      password: f.controls.password.value
    };
    if (f.valid) {
      this.auth.register(user).subscribe(registered => {
        if (registered) {
          this.router.navigate(['/']);
        } else {
          f.form.setErrors({registerFailed: true});
        }
      });
    }
  }
}
