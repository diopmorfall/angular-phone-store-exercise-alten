import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Input is needed to allow our component to receive data from the parent element
// Output and EventEmitter are for handling events

import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// the following class below will become a component with the html above (?)
export class ProductAlertsComponent implements OnInit {
  //@Input() product!: Product; why does this change (?)
  @Input() product: Product | undefined;
  // the input value must be of Product type
  @Output() notify = new EventEmitter();
  // and here we kinda create this new event that'll be fired

  // I'm always defining the properties that'll be used as attributes in the html template elements

  constructor() {}

  ngOnInit(): void {}
}
