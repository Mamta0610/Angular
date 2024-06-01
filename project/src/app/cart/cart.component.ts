import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent{
  totalPrice=0;
  constructor(private userService:UserService,
              private cartService:CartService,
              private router:Router,
              private sharedService: SharedServiceService,
              private toastr:ToastrService){}
  uid:any;
  cartItems: any[] = [];
  getStoredUid(): any {
    this.uid= sessionStorage.getItem('uId');
    return this.uid;
  }

  ngOnInit(){
    this.uid=this.getStoredUid();
    this.cartService.getCartItems(this.uid).subscribe(
      (data) => {this.cartItems = data;
        // console.log((this.cartItems[1][1].price));
          for (const item of this.cartItems) {
            // /console.log((this.cartItems[1].quantity)*this.cartItems[1].price);
            this.totalPrice += item[1].price * item[0];
          }
        
      }
      );
  }

  

  
  
  removeFromCart(pid:any){
    this.cartService.removeItem(this.uid,pid).subscribe(
      (response:string) => {
        console.log(this.uid);
        if(response.indexOf('product removed from cart successfully')!=-1){
            // alert("product removed from cart successfully");
            this.toastr.success('product removed from cart', 'Success');
         }else{
              document.write(response);
            }
          }
        );
        window.location.reload();
      }

      m:any;
      deliadd:any;
      placeOrder(){

        this.uid=this.getStoredUid();
        // this.deliadd=this.sharedService.getDeliveryInfo();
        this.cartService.placeOrder(this.uid).subscribe(
          (response:any)=>{
            this.m = JSON.stringify(response);

            console.log(this.m);
            if(response=='Order placed successfully'){
              this.router.navigate(['/orderSuccess']);
           }else{
                document.write(response);
              }
            }
        );
      }

      logout(){
        sessionStorage.removeItem('uId');
        this.router.navigate(['/login']);
      }

     
      
}
