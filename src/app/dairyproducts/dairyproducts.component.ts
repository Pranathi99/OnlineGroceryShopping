import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dairyproducts',
  templateUrl: './dairyproducts.component.html',
  styleUrls: ['./dairyproducts.component.css']
})
export class DairyproductsComponent implements OnInit {
  DAIRYPRODUCTS = [
    {
        description: 'Milk',
        img: 'assets/images/milk.jpg',
        price: 30,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Curd',
        img: 'assets/images/curd.jpg',
        price: 90,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Paneer',
        img: 'assets/images/paneer.jpg',
        price: 70,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Ghee',
        img: 'assets/images/ghee.jpg',
        price: 120,
        quantity: 0,
        typeOfQuantity: 'kg',
        availableQuantity: 5
    },
    {
        description: 'ButterMilk',
        img: 'assets/images/buttermilk.jpg',
        price: 30,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Lassi',
        img: 'assets/images/lassi.jpg',
        price: 30,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Yogurt',
        img: 'assets/images/yogurt.jpg',
        price: 60,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Cheese',
        img: 'assets/images/cheese.jpg',
        price: 120,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    },
    {
        description: 'Butter',
        img: 'assets/images/butter.jpg',
        price: 95,
        quantity: 0,
        typeOfQuantity: 'packet',
        availableQuantity: 5
    }
];

dairyproducts=this.DAIRYPRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
