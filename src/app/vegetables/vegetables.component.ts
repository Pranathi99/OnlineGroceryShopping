import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  VEGETABLES = [
    {
        description: 'Tomato',
        img: 'assets/images/tomato.jpg',
        price: 40,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Potato',
        img: 'assets/images/potato.jpg',
        price: 50,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Onion',
        img: 'assets/images/onion.jpg',
        price: 60,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Brinjal',
        img: 'assets/images/brinjal.jpg',
        price: 40,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Broccoli',
        img: 'assets/images/broccoli.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Cabbage',
        img: 'assets/images/cabbage.jpg',
        price: 30,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Cauliflower',
        img: 'assets/images/cauliflower.jpg',
        price: 40,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Capsicum',
        img: 'assets/images/capsicum.jpg',
        price: 30,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Carrot',
        img: 'assets/images/carrot.jpg',
        price: 50,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    }
];

vegetables=this.VEGETABLES;

  constructor() { }

  ngOnInit(): void {
  }

}
