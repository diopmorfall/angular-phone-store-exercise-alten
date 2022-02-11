import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
})
export class BikesComponent implements OnInit {
  @Input() bikeColor: string = '';
  @Input() name: string = '';
  @Input() price: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
