import { Injectable } from '@angular/core';
import { Shopping } from '../exo7/types/shopping';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _shopping: Shopping[] = [
    { name: 'Pomme', quantity: 2, pricePromo: 1.30, price: 1.30, promo: false},
    { name: 'Poire', quantity: 1, pricePromo: 1.35,  price: 1.50, promo: true},
  ];

  constructor() { }

  getAll(): Shopping[] {
    return this._shopping;
  }
  
  productPricePromo!: number;
  addProduct(productName: string, productPrice: number, productPromo: boolean, total: number) {

    if (productPromo) {
      this.productPricePromo = productPrice * 0.9;
    }
    else {
      this.productPricePromo = productPrice;
    }
    
    const newProduct: Shopping = {
      name: productName,
      quantity: 1,
      pricePromo: this.productPricePromo,
      price: productPrice,
      promo: productPromo,
    }
    this._shopping.push(newProduct);
    
  }

  deleteProduct() {

  }

  incrProduct() {
    
  }

  decrProduct() {

  }

}
