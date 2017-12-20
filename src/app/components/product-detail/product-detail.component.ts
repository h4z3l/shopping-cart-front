import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  cartitem: CartItem | boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.service.getProduct(id).subscribe(product => {
        this.product = product;
        if (this.cart.hasItem(product)) {
          this.cartitem = this.cart.getItem(product);
        } else {
          this.cartitem = false;
        }
      });
    });
  }

  addToCart (product: Product, quantity: number) {
    if (quantity > 0) 
      this.cartitem = this.cart.addItem(product, quantity);
  }

  removeFromCart () {
    if (this.cartitem) {
      this.cart.removeItem(<CartItem>this.cartitem);
      this.cartitem = false;
    }
  }

}
