import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// imported because it has the products

@Component({
  selector: 'app-cart',
  template: `
    <h2 class="pippo | pluto">Cart</h2>
    <div *ngFor="let item of items" class="cart-item">
      <span>{{ item.name }}</span>
      <span>{{ item.price | currency }}</span>
    </div>
  `,
  styles: [
    `
    .pippo{
      background: green;
    }

    .pluto{
      background: red;
    }
  `,
  ],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  // why here, isn't cartService injected below (?)
  // Angular doesn't care of the order, it can handle it
  constructor(private cartService: CartService) {}
  // injection of cartService, so that CartComponent can use it

  ngOnInit(): void {}
}
