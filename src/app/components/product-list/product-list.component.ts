import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.service.getProductByName(name).subscribe(products => this.products = products);
      } else {
        this.service.getProducts().subscribe(products => this.products = products);
      }
    });
  }

}
