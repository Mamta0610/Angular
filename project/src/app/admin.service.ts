import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient){}
  //get products
  getAdminProduct(){
    const url="http://localhost:8080/allProducts";
    return this.http.get(url);
  }

  // //update api 
  // update(p:Product){
  // //   // console.log(p);
  // //   const url="http://localhost:8080//"+ p.Id;
  // //   var headers=new HttpHeaders({'Content-Type':'application/json'})
  // //   return this.http.put(url,p,{headers});
  // }
  
}