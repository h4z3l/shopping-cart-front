import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count: number;
  user: User;

  constructor(
    private router: Router,
    private cart: CartService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.cart.count().subscribe(count => this.count = count);
    this.auth.currentUser.subscribe(user => this.user = user);
  }

  handleSubmit(f) {
    const name = f.controls.name.value;
    this.router.navigate(['/products'], { queryParams: { name }});
  }

  logout($event) {
    $event.preventDefault();
    this.auth.logout();
  }

}
