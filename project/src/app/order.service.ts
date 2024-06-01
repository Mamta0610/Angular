import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrderHistory(uId:number){
    const url=`http://localhost:8080/orderHistory?uId=${uId}`;
    return this.http.get(url);
  }
}
