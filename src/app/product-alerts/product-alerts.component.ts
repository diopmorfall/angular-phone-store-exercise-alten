import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Input is needed to allow our component to receive data from the parent element
// Output and EventEmitter are for handling events
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// the class following this above will become a component and it'll also be exported
export class ProductAlertsComponent implements OnInit {
  //@Input() product!: Product;
  @Input() product: Product | undefined;
  // input takes the data from the Product class
  @Output() notify = new EventEmitter();
  // and here we can emit an event

  constructor() {}

  ngOnInit(): void {}
}
