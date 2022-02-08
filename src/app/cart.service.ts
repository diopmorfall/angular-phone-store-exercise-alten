import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  // items is a product array type (?) (initially empty)
  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
    // the product we get has to be of the same type of the items
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}
