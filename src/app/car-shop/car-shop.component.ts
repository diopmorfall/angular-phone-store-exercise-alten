import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.component.html',
  styleUrls: ['./car-shop.component.css'],
})
export class CarShopComponent implements OnInit {
  @Input() name: string = '';
  @Input() price: number | undefined;
  @Input() priceColor: string = '';
  constructor() {}

  ngOnInit(): void {}
}
