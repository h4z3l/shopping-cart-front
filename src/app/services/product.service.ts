import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _url: String = '/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this._url.toString()).map(response => <Product[]>response);
  }

  getProduct(id: String): Observable<Product> {
    return this.http.get(`${this._url.toString()}/${id}`).map(response => <Product>response);
  }

  getProductByName(name: String): Observable<Product[]> {
    return this.http.get(`${this._url.toString()}?name=${name}`).map(response => <Product[]>response);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get('/api/categories').map(response => <Category[]>response);
  }

  getCategory(id: string): Observable<Product[]> {
    return this.http.get(`/api/categories/${id}`).map(response => <Product[]>response);
  }
}
