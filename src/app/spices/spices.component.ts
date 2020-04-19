import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})

export class SpicesComponent implements OnInit {

   SPICES = [
    {
        description: 'Cardamom',
        img: 'assets/images/cardamom.jpg',
        price: 40,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Cumin',
        img: 'assets/images/cumin.jpg',
        price: 40,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Star Anise',
        img: 'assets/images/starAnise.jpg',
        price: 60,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Bay leaf',
        img: 'assets/images/bayleaf.jpg',
        price: 30,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Pepper',
        img: 'assets/images/black-pepper.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Oregano',
        img: 'assets/images/oregano.jpg',
        price: 60,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Saffron',
        img: 'assets/images/saffron.jpg',
        price: 120,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Sesame',
        img: 'assets/images/sesame.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    },
    {
        description: 'Nutmeg',
        img: 'assets/images/nutmeg.jpg',
        price: 120,
        quantity: 0,
        typeOfQuantity: '500 gms',
        availableQuantity: 5
    }
];

spices = this.SPICES;
  constructor() { }

  ngOnInit(): void {}

}
