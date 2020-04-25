import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['./breads.component.css']
})
export class BreadsComponent implements OnInit {
  BREADS = [
    {
        description: 'Milk Bread',
        img: 'assets/images/milkbread.jpg',
        price: 45,
        quantity: 0,
        typeOfQuantity: 'packet(500gms)',
        availableQuantity: 5
    },
    {
        description: 'Brown Bread',
        img: 'assets/images/brownbread.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: 'packet(500gms)',
        availableQuantity: 5
    },
    {
        description: 'Baguette',
        img: 'assets/images/baguette.jpg',
        price: 90,
        quantity: 0,
        typeOfQuantity: 'packet(500gms)',
        availableQuantity: 5
    },
    {
        description: 'Whole Wheat Bread',
        img: 'assets/images/wwbread.jpg',
        price: 120,
        quantity: 0,
        typeOfQuantity: 'packet(500gms)',
        availableQuantity: 5
    },
    {
        description: 'Bagel',
        img: 'assets/images/bagel.jpg',
        price: 50,
        quantity: 0,
        typeOfQuantity: 'packet(500gms)',
        availableQuantity: 5
    }
];

breads=this.BREADS;
  constructor() { }

  ngOnInit(): void {
  }

}
