import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {}

  addToCart(): void {
    this.cartService.addItem(this.product, 1);
  }
}
