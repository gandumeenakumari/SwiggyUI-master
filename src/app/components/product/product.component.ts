import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/Products.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Products[]=[];
  constructor(private productsService:ProductService,private httpclient:HttpClient) {

   }

  ngOnInit(): void {
    this.productsService.GetAllProducts()
    .subscribe({
      next:(products)=>{
        this.products=products;
        console.log(products);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

}
