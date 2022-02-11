import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() label: string = '';
  @Input() price: number | undefined;
  @Input() priceColor: string = '';

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  showDesc = false;
}
