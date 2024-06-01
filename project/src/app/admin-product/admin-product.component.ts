import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Product } from '../Product';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {
  posts:any;
  aproducts:any;
  myObj:any;
  constructor(private httpService:AdminService){}

  ngOnInit(){
    this.httpService.getAdminProduct().subscribe(
      (response)=>{this.aproducts=response}
    );
  }

  // Update(pid:number,name:string,description:string,price:number,stock:number,category:any){
  //   this.myObj=new Product(pid,name,description,price,stock);
  //     this.httpService.update(this.myObj).subscribe(
  //       (response)=>{this.posts=response;}
  //      );
  //      window.location.reload(); 
  // }

  Delete(){
    
  }
}
