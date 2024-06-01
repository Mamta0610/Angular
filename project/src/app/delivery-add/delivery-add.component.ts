import { Component } from '@angular/core';
import { deliveryadd } from '../deliveryadd';
import { CartService } from '../cart.service';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-delivery-add',
  templateUrl: './delivery-add.component.html',
  styleUrl: './delivery-add.component.css'
})
export class DeliveryAddComponent {

  constructor(private cartService:CartService,private sharedService: SharedServiceService) {}

  deliveryInfo: deliveryadd = new deliveryadd('', '', '', '', '', 0); // Initializing with default values
  

  ngOnInit(){
    this.onSubmit;
 }

  onSubmit(){
  console.log(this.deliveryInfo);
  // sessionStorage.setItem('uId',this.deliveryInfo);
  this.sharedService.setDeliveryInfo(this.deliveryInfo);
  }
}
