import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrl: './category2.component.css'
})
export class Category2Component {
  popProducts:any;
  constructor(private httpService:UserService){}

  ngOnInit(){
    this.httpService.getPopProduct().subscribe(
      (response)=> {this.popProducts=response},
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
