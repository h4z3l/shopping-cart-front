import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.currentUser.subscribe(user => this.user = user);
  }

  update () {
    this.auth.update(this.user).subscribe(user => {
      if (user) {
        this.user = user;
        this.router.navigate(['/']);
      }
    });
  }

}
