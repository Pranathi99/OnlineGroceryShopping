import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  starList: boolean[] = [true,true,true,true,true];       
  rating:number;  
  setStar(data:any){
    this.rating=data;                               
    for(var i=0;i<=4;i++){  
      if(i<=data){  
        this.starList[i]=false;  
      }  
      else{  
        this.starList[i]=true;  
      }  
   }  
}
}
