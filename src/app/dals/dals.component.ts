import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dals',
  templateUrl: './dals.component.html',
  styleUrls: ['./dals.component.css']
})
export class DalsComponent implements OnInit {
  DALS = [
    {
        description: 'Green Moong Dal',
        img: 'assets/images/greenmoong.jpg',
        price: 80,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Urad Dal',
        img: 'assets/images/urad.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Masoor Dal',
        img: 'assets/images/masoor.jpg',
        price: 90,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Chickpea',
        img: 'assets/images/chickpea.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Horsegram',
        img: 'assets/images/horsegram.jpg',
        price: 80,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Yellow Moong Dal',
        img: 'assets/images/yellowmoong.jpg',
        price: 110,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Brown Chickpeas',
        img: 'assets/images/brownchickpeas.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Toor Dal',
        img: 'assets/images/toor.jpg',
        price: 60,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'Kidney Beans',
        img: 'assets/images/rajma.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    }
];

dals = this.DALS;
  constructor() { }

  ngOnInit(): void {
  }

}
