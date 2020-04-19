import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

let items = new Map();

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor() { }

  availableItems = items;

  ngOnInit(): void {
  }

  addToCart(product): void {
    items.set(product.description, product);
  }

  getItems() {
    return items;
  }

  clearProductFromCart(product) {
    items.delete(product.description);
  }

  getValues(map) {
    return Array.from(map.values());
  }

  totalPrice() {
    var total = 0;
    items.forEach((value: Product, key: string) => {
      total += value.price * value.quantity;
    });
    return total;
  }

  totalNoOfItems() {
    var count = 0;
    items.forEach((value: Product, key: string) => {
      count += value.quantity;
    });
    return count;
  }
}
