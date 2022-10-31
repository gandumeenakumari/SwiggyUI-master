import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{JwtHelperService} from '@auth0/angular-jwt';
import { UrlSegment } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  currentUser:BehaviorSubject<any>=new BehaviorSubject(null);
   baseurl = 'https://localhost:44367/api/';
   jwtHelperService=new JwtHelperService();


registerUser(user:Array<String>) 
{
  return this.http.post(this.baseurl+'User/createUser',{
    FirstName : user[0],
    LastName : user[1],
    Email : user[2],
    MobileNumber : user[3],
    Gender : user[4],
    Password : user[5]
  },{responseType:'text'});
}

loginUser(loginInfo: Array<String>)
{
  return this.http.post(this.baseurl+'User/loginUser',{
    Email: loginInfo[0],
    Password : loginInfo[1]
  },{responseType: 'text',});
}
setToken(token:string)
{
  localStorage.setItem("access_token",token);
  this.loadCurrentUser();
}
loadCurrentUser(){
  const token=localStorage.getItem("access_token");
  const userInfo =token!=null? this.jwtHelperService.decodeToken(token):null;
const data=userInfo?{
  id:userInfo.id,
  firstname:userInfo.firstname,
  lastname:userInfo.lastname,
  email:userInfo.email,
  mobile:userInfo.mobile,
  gender:userInfo.gender
}:null;
this.currentUser.next(data);
}
isLoggedin():boolean{
  return localStorage.getItem("access_token")?true:false;
}
removeToken(){
  localStorage.removeItem("access_token");
}
}