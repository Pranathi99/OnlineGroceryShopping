import { Component, Input, OnInit} from '@angular/core';
import { SpicesComponent } from '../spices/spices.component';
import { Product } from '../product';
import { CartComponent } from '../../app/cart/cart.component';

let cartComponent =new CartComponent();

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  constructor() {
  }

  @Input() product: Product;
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
