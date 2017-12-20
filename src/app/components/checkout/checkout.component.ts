import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service'; 
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart-item';
import { Order } from '../../models/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items: CartItem[];
  total: number;

  constructor(
    private cart: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cart.getItems().subscribe(items => this.items = items);
    this.cart.total.subscribe(total => this.total = total);
  }

  handleSubmit (f) {
    const items = []

    for (let i of this.items) {
      items.push({
        productId: i.product.id,
        quantity: i.quantity
      });
    }

    const order: Order = {
      order: {
        creditCardNumber: f.controls.creditCardNumber.value,
        securityCode: f.controls.securityCode.value,
        expirationDate: f.controls.expirationDate.value
      },
      items: items
    };

    return this.orderService.createOrder(order).subscribe(order => {
      if (order) {
        this.cart.clear();
        this.router.navigate(["/"]);
        return true;
      } else {
        return false;
      }
    });
  }
}
