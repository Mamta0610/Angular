import { Injectable } from '@angular/core';
import { deliveryadd } from './deliveryadd';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  // private deliveryInfo: deliveryadd;
  private deliveryInfo: deliveryadd = new deliveryadd('', '', '', '', '', 0);


  setDeliveryInfo(info: deliveryadd) {
    this.deliveryInfo = info;
  }

  getDeliveryInfo(): deliveryadd {
    return this.deliveryInfo;
  }


}
