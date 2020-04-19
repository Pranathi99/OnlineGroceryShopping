import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartComponent } from '../../app/cart/cart.component';

let cartComponent =new CartComponent();
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Input() product : Product;
  
  constructor() { }

  ngOnInit(): void {
  }

  addToCartOnClick(): void {
    cartComponent.addToCart(this.product);
  }

  onPlusClick(): void {
    var value = this.product.quantity + 1;
    var available = this.product.availableQuantity;
    if (value <= available) {
      this.product.quantity = value;
      this.addToCartOnClick();
    }
  }

  onMinusClick(): void {
    var value = this.product.quantity - 1;
    if (value > 0) {
      this.product.quantity = value;
      this.addToCartOnClick();
    }
    if(value==0)
    {
      cartComponent.clearProductFromCart(this.product);
    }
  }

}