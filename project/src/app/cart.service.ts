import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItems(uid:string){
    const url = `http://localhost:8080/getCartItems?id=${uid}`;
    console.log(url);
    return this.http.get<any[]>(url);
  }


  removeItem(uid:any,pid:number){
    const url = `http://localhost:8080/removeProductFromCart?uId=${uid}&pId=${pid}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',responseType:'text' });
    
    return this.http.delete(url,{headers,responseType:'text'});
  }

  placeOrder(uid:any){
    const url = `http://localhost:8080/placeOrder?uId=${uid}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',responseType:'text' });
    return this.http.post(url,{},{headers,'responseType':'text'});
  } 
  
}
