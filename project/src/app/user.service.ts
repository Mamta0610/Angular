import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient){}
  //get products
  getUserProduct(){
    const url="http://localhost:8080/allProducts";
    return this.http.get(url);
  }
  
  public uId:any;
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const url = `http://localhost:8080/loginUser?email=${email}&password=${password}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.uId= this.http.post(url, body, { headers,responseType:'text' });
    return this.uId;
}

  addToCart(pId:number,uId:string){
    const body = {pId,uId };
    const url = `http://localhost:8080/addToCart?uId=${uId}&pId=${pId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, body, { headers,responseType:'text' });
  }

  getEchoProduct(){
    const url=`http://localhost:8080/productsbycategory?cId=${102}`;
    return this.http.get(url);
  }

  getPopProduct(){
    const url=`http://localhost:8080/productsbycategory?cId=${101}`;
    return this.http.get(url);
  }

  getUser(uId: any): Observable<string> {
    const url = `http://localhost:8080/fetchUserName/${uId}`;
    return this.http.get(url, { responseType: 'text' });
  }

 
  
} 
