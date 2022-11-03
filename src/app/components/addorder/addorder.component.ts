import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/Orders.models';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
  addorder:Orders={
    orderId:0,
    img:'',
    productName:'',
    category:'',
    quantity:0,
    price:0

  }
 constructor() { }

  ngOnInit(): void {
  }

}
