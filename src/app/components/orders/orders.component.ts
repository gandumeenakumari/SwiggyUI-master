import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/models/Orders.models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Orders[]=[];
    productId:any;

  constructor(private route:ActivatedRoute ,private productsService:ProductService,private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.productsService.GetAllOrders()
    .subscribe({
      next:(orders)=>
      {
        this.orders=orders;
        console.log(orders);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })

  }

}
