import { Component } from '@angular/core';

import { products } from '../products'; // X

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products; // takes the data from X up there

  share() {
    window.alert('Product shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  // child event the parent will react to
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
