import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
// imported because it has the products

@Component({
  selector: 'app-cart',
  template: `
    <h2 class="pippo | pluto">Cart</h2>
    <p>
      <a routerLink="/shipping">Shipping prices</a>
    </p>
    <div *ngFor="let item of items" class="cart-item">
      <span>{{ item.name }}</span>
      <span [className]="item.price > 700 ? 'pluto' : 'pippo'">
        {{ item.price | currency }}
      </span>
    </div>

    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" formControlName="name" />
      </div>

      <div>
        <label for="address">Address</label>
        <input type="text" id="address" formControlName="address" />
      </div>
      <button class="button" type="submit">Purchase</button>
    </form>
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
  // Angular doesn't care of the order, it handles it
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
  // injection of some services, so that CartComponent can use them

  onSubmit(): void {
    // on submitting the form we confirm the order and reset everything
    this.items = this.cartService.clearItems();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}
