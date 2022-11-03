import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orders } from '../models/Orders.models';
import { Products } from '../models/Products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  p:Products[]=[];
  public GetAllProducts():Observable<Products[]>{
    return this.http.get<Products[]>('https://localhost:44367/api/Products');
  }
  GetProduct(productId:string):Observable<Products>{
    return this.http.get<Products>('https://localhost:44367/api/Products/'+productId);

  }
  public GetAllOrders():Observable<Orders[]>
  {
    return this.http.get<Orders[]>('https://localhost:44367/api/Orders');
  }
  public addtoCart(product:Products):Observable<any>{
    return this.http.post('https://localhost:44367/api/Orders/',{product});
  }
}
