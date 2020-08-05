import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-shiping',
  templateUrl: './shiping.component.html',
  styleUrls: ['./shiping.component.css']
})
export class ShipingComponent implements OnInit {
   shipingCosts;
  constructor(private cartService : CartService) { }
  ngOnInit() {
   this.shipingCosts = this.cartService.getShipingPrices();
  }

}