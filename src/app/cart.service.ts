import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  // items is a product array type (?) (initially empty)
  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      './assets/shipping.json'
    );
  }
}
