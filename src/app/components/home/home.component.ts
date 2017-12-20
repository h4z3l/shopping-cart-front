import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: string[];
  categories: Category[];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getCategories().subscribe(categories => this.categories = categories);
    
    this.slides = [
      "assets/slides/slide1.jpg",
      "assets/slides/slide2.jpg",
      "assets/slides/slide3.jpg",
    ];
  }

}

