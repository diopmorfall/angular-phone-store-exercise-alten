import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; // this property is Product type
  constructor(private route: ActivatedRoute) {
    // ActivatedRoute has infos about the route and its parameters
    const routeParams = this.route.snapshot.paramMap;
    // here we got the route infos we put in app.module.ts
    // .snapshot gets infos about the current active route (only one)
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
    // when the product id and the id in the url match, we get the current product
  }

  ngOnInit(): void {}
}
