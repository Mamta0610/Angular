import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { response } from 'express';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrl: './user-product.component.css'
})
export class UserProductComponent {
  products:any;
  userName: string | null = null;
  uid:any;
  constructor(private httpService:UserService, private router:Router,private toastr: ToastrService){}

  ngOnInit(){
    this.httpService.getUserProduct().subscribe(
      (response)=> {this.products=response},
      (error)=>{console.log(error)},
     
    );
  }
 
  getStoredUid(): any {
    this.uid= sessionStorage.getItem('uId');
    return this.uid;
  }

  onProfileIconHover() {
    this.uid=this.getStoredUid();
    this.httpService.getUser(this.uid).subscribe(
      (response:string)=>{
        console.log("username"+response);
        this.userName=response}
    ); 
  }

  onProfileIconLeave(){
    this.userName = null;
  }

  addToCart(pid:number){
    this.uid=this.getStoredUid();
    console.log(this.uid);
    this.httpService.addToCart(pid,this.uid).subscribe(
      (response:string) =>{
        if(response.indexOf('Product added to cart successfully')!=-1){
          // alert("Product added to cart successfully");
          this.toastr.success('Product added to cart successfully', 'Success');
        }else{
          document.write(response);
        }
      },
      (error) => { console.log(error) }
    );
  }

  logout(){
    sessionStorage.removeItem('uId');
    this.router.navigate(['/login']);
  }

  gotoEchoProduct(){
    this.router.navigate(['/echofriendly']);
  }
}
