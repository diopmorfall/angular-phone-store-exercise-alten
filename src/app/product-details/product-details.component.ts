import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { cars } from '../cars';
import { bikes } from '../bikes';
import { CartService } from '../cart.service';
// imported here because we usually add to the cart when we see the details of the product

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  car: Product | undefined;
  bike: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    // ActivatedRoute has infos about the route and its parameters
    const routeParams = this.route.snapshot.paramMap;
    // here we got the route infos we put in app.module.ts
    // .snapshot gets infos about the current active route (only one)
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );

    const carIdFromRoute = Number(routeParams.get('carId'));
    this.car = cars.find((car) => car.id === carIdFromRoute);

    const bikeIdFromRoute = Number(routeParams.get('bikeId'));
    this.bike = bikes.find((bike) => bike.id === bikeIdFromRoute);
    // when the product id and the id in the url match, we get the current product
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product added to the cart');
  }

  ngOnInit(): void {}
}
