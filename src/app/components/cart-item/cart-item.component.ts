import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;
  totalPrice: number;

  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  removeFromCart() {
    this.cart.removeItem(this.item);
  }

  update() {
    if (this.item) {
      this.cart.addItem(this.item.product, this.item.quantity);
    }
  }
}
