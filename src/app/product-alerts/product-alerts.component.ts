import { Component, OnInit, Input } from '@angular/core';
// Input is needed to allow our component to receive data from the parent element
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
// the class following this above will become a component and it'll also be exported
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}
}
