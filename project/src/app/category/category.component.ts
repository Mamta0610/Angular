import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  echoProducts:any;
  constructor(private httpService:UserService,){}

  ngOnInit(){
    this.httpService.getEchoProduct().subscribe(
      (response)=> {this.echoProducts=response},
      (error)=>{console.log(error)},
      );
  }

  uid:any;
  getStoredUid(): any {
    this.uid= sessionStorage.getItem('uId');
    return this.uid;
  }

  addToCart(pid:number){
    this.uid=this.getStoredUid();
    this.httpService.addToCart(pid,this.uid).subscribe(
      (response:string) =>{
        if(response.indexOf('Product added to cart successfully')!=-1){
          alert("Product added to cart successfully");
        }else{
          document.write(response);
        }
      },
      (error) => { console.log(error) }
    );
  }
}
