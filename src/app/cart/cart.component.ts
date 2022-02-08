import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// imported because it has the products

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  // why here, isn't cartService injected below (?)
  constructor(private cartService: CartService) {}
  // injection of cartService, so that CartComponent can use it

  ngOnInit(): void {}
}
