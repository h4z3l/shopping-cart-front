import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  total: number;

  constructor(private service: CartService) { }

  ngOnInit() {
    this.service.getItems().subscribe(items => this.items = items);
    this.service.total.subscribe(total => this.total = total);
  }

}

