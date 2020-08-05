import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  item = [];
  
  addToCart(product) {
    this.item.push(product);
  }
  getItems(){
    return this.item;
  }
  clearCar(){
    this.item = [];
    return this.item;
  }
  constructor() { }

}