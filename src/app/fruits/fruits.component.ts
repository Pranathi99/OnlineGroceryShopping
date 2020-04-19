import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  FRUITS = [
    {
        description: 'Apples',
        img: 'assets/images/apple.jpg',
        price: 25,
        quantity: 0,
        typeOfQuantity: 'piece',
        availableQuantity: 5
    },
    {
        description: 'Bananas',
        img: 'assets/images/banana.jpg',
        price: 50,
        quantity: 0,
        typeOfQuantity: 'dozen',
        availableQuantity: 5
    },
    {
        description: 'Black Grapes',
        img: 'assets/images/blackgrapes.jpg',
        price: 80,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Green Grapes',
        img: 'assets/images/greengrapes.jpg',
        price: 60,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Kiwi',
        img: 'assets/images/kiwi.jpg',
        price: 15,
        quantity: 0,
        typeOfQuantity: 'piece',
        availableQuantity: 5
    },
    {
        description: 'Sapota',
        img: 'assets/images/sapota.jpg',
        price: 5,
        quantity: 0,
        typeOfQuantity: 'piece',
        availableQuantity: 5
    },
    {
        description: 'Strawberries',
        img: 'assets/images/strawberry.jpg',
        price: 90,
        quantity: 0,
        typeOfQuantity: 'box(500gms)',
        availableQuantity: 5
    }
];

fruits = this.FRUITS;
  constructor() { }

  ngOnInit(): void {
  }

}
