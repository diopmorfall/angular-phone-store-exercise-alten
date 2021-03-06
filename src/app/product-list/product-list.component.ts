import { Component } from '@angular/core';

import { Product, products } from '../products'; // X

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html', // view
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] | undefined;

  constructor() {
    /*
    setTimeout(() => {
      this.products = products;
    }, 2000);
    */
    this.products = products;
  }
  //products = products; // takes the data from X up there

  share(event: any) {
    // : any is used when it doesn't know what type expect
    window.alert(event);
    console.log(event);
  }

  onNotify(event: any) {
    window.alert(
      'The notify event fired from the children and catched by the parent'
    );
    console.log(event);
  }
  // child event the parent will react to
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
