import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  public num=["1234","3456","6789","7895"];
   public orderno= "3456";
   public expecteddate=["7-nov-2020","8-nov-2020","20-april-2020","7895"];
   public date= "20-April-2020";
  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Order Confirmed","Processing order",
  "Dispatched Item","Delivered"];
  public orderStatus = "Dispatched Item";
  constructor() { }

  ngOnInit(): void {
  }

}
