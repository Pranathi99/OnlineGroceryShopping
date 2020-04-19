import { Component, OnInit } from '@angular/core';
import {CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-fixed-navbar',
  templateUrl: './fixed-navbar.component.html',
  styleUrls: ['./fixed-navbar.component.css']
})
export class FixedNavbarComponent implements OnInit {

  cartComponent = new CartComponent();
  cartCount=this.cartComponent.totalNoOfItems();

  constructor() { }

  ngOnInit(): void {
  }
}
