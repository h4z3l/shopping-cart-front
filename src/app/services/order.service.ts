import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  _url = '/api/orders';

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post(this._url, order).map(response => <Order>response);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get(this._url).map(response => <Order[]>response);
  }
}
