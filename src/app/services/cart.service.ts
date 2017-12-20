import { Injectable, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  items: CartItem[] = [];
  observer: Subscriber<{}>;
  total: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  getItems(): Observable<CartItem[]> {
    const itemsStream = new Observable(observer => {
      observer.next(this.items);
      observer.complete();
    });
    return <Observable<CartItem[]>>itemsStream;
  }

  getItem(product: Product): CartItem {
    const item = this.items.find(i => i.product.id === product.id);
    return item;
  }

  clear(): void {
    this.items = [];
  }

  hasItem(product: Product): boolean {
    const item = this.items.find(i => i.product.id === product.id);
    return item !== undefined;
  }

  addItem(product: Product, quantity: number): CartItem | boolean {
    var item: CartItem | boolean = false;
    if (quantity === 0)
      return false;
    if (this.hasItem(product)) {
      item = this.items.filter(i => i.product.id === product.id)[0];
      const index = this.items.indexOf(item);
      this.items[index].quantity = quantity;
    } else {
      item = {
        product: product,
        quantity: quantity
      };
      this.items.push(item);
      this.observer.next(this.items.length);
    }
    this.updateTotal();
    return item;
  }

  updateTotal() {
    let total = 0;
    for (let i of this.items) {
      total += i.product.price * i.quantity;
    }
    this.total.next(total);
  }

  removeItem(item: CartItem): void {
    if (item === undefined) {
      return;
    }
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.observer.next(this.items.length);
    this.updateTotal();
  }

  count(): Observable<number> {
    const countStream = new Observable(observer => {
      this.observer = observer;
      this.observer.next(0);
    });
    return <Observable<number>>countStream;
  }
}
