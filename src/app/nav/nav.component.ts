import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cartComponent = new CartComponent();
  cartCount=this.cartComponent.totalNoOfItems();
  
  constructor() { }

  ngOnInit(): void {
  }

}
