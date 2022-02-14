import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
// imported because it has the products

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  cars = this.cartService.getItems();
  bikes = this.cartService.getItems();
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

  itemShow: boolean = false;
  priceShowed: number | undefined;
  descriptionShowed: string = '';
  imgUrl: string = '';

  logging(event: any) {
    this.descriptionShowed = event.description;
    this.itemShow = !this.itemShow;
    this.priceShowed = event.price;
    this.imgUrl = event.imgUrl;
    console.log(event);
  }

  onSubmit(): void {
    // on submitting the form we confirm the order and reset everything
    this.items = this.cartService.clearItems();
    this.cars = this.cartService.clearItems();
    this.bikes = this.cartService.clearItems();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}
