import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
  constructor(private orderService:OrderService){}
  uid:any;
  getStoredUid(): any {
    this.uid= sessionStorage.getItem('uId');
    return this.uid;
  }

  ordersMap:any;
  ngOnInit(){
    this.uid=this.getStoredUid();
    this.orderService.getOrderHistory(this.uid).subscribe(
      (response:any)=>{ this.ordersMap=response}
    );
  }

}