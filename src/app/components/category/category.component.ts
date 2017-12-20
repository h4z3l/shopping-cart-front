import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: Product[];

  constructor(
    private service: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.service.getCategory(id).subscribe(products => this.products = products);
    });
  }

}
