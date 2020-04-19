import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flours',
  templateUrl: './flours.component.html',
  styleUrls: ['./flours.component.css']
})
export class FloursComponent implements OnInit {
FLOURS = [
    {
        description: 'Whole Wheat Atta',
        img: 'assets/images/atta.jpg',
        price: 120,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'All Purpose Flour',
        img: 'assets/images/maida.jpg',
        price: 100,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Semolina',
        img: 'assets/images/semolina.jpg',
        price: 110,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Rice Flour',
        img: 'assets/images/riceflour.jpg',
        price: 90,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Gram Flour',
        img: 'assets/images/besan.jpg',
        price: 130,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    }
];

flours = this.FLOURS;
  constructor() { }

  ngOnInit(): void {
  }

}
