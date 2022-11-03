import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/Products.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  products:Products=
  {
    productId:0,
    productName:'',
    img:'',
    category:'',
    quantity:0,
    price:0
  };
    productId:any;
  constructor(private route:ActivatedRoute ,private productsService:ProductService,private httpclient:HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>
      {
        const productId=params.get('productId');
        if(productId){
          this.productsService.GetProduct(productId)
          .subscribe({
            next:(response)=>
            {
              this.products=response;
            }
          })
        }
      }
    })
  }



  
}
