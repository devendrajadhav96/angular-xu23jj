import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {
  item = [];
  constructor(private http :HttpClient) { }
  addToCart(product) {
    this.item.push(product);
  }
  getItems(){
    return this.item;
  }
  clearCart(){
    this.item = [];
    return this.item;
  }
  getShipingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}