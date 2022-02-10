import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Input is needed to allow our component to receive data from the parent element
// Output is to send data to the parent element
// EventEmitter is for handling events

import { Product } from '../products';

@Component({
  selector: 'product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// the following class below will become a component with the html above (?) Yes
export class ProductAlertsComponent implements OnInit {
  //@Input() product!: Product; //why does this change (?)
  // these are two ways of saying product could be undefined or type Product; the one below is more clear
  @Input() product: Product | undefined;
  // the input value must be of Product type, otherwise it'll be undefined
  @Output() notify = new EventEmitter();
  // and here we kinda create this new event that'll be fired

  // I'm always defining the properties that'll be used as attributes in the html template elements, even if they're not standard

  constructor() {}

  ngOnInit(): void {}
}
