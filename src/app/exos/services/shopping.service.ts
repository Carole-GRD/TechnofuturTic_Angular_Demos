import { Injectable } from '@angular/core';
import { Shopping } from '../exo7/types/shopping';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _shopping: Shopping[] = [
    { name: 'Pomme', quantity: 1, pricePromo: 1.30, price: 1.30, promo: false, pricePromoUnite: 1.30, priceUnite: 1.30 },
    { name: 'Poire', quantity: 1, pricePromo: 1.35,  price: 1.50, promo: true, pricePromoUnite: 1.35, priceUnite: 1.50 },
  ];

  constructor() { }

  getAll(): Shopping[] {
    return this._shopping;
  }
  
  total!: number;
  productPricePromo!: number;
  addProduct(productName: string, productPrice: number, productPromo: boolean) {

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
      pricePromoUnite: this.productPricePromo,
      priceUnite: productPrice,
    }
    this._shopping.push(newProduct);
    
  }

  deleteProduct(productToDelete: Shopping, pricePromoUnite: number, total: number) {
    console.log(this.total);
    const indexProduct = this._shopping.findIndex((product) => {
      return product.name === productToDelete.name;
    })
    this._shopping.splice(indexProduct, 1);

    // this.total = total - pricePromoUnite;
    // this.totalPrice();
    
  }

  // pricePromoUnite!: number;
  incrProduct(productToIncr: Shopping, pricePromoUnite: number, total: number) {
    productToIncr.quantity += 1;
    productToIncr.pricePromo = productToIncr.pricePromoUnite * productToIncr.quantity;
    productToIncr.price = productToIncr.priceUnite * productToIncr.quantity;
    

  }

  decrProduct(productToDecr: Shopping, pricePromoUnite: number, total: number) {
    productToDecr.quantity -= 1;
    if (productToDecr.quantity < 1) {
      this.deleteProduct(productToDecr, productToDecr.pricePromo, this.total);
    }
    else {
      productToDecr.pricePromo = productToDecr.pricePromoUnite * productToDecr.quantity;
      productToDecr.price = productToDecr.priceUnite * productToDecr.quantity;
      this.total = total - pricePromoUnite;
    }
  }

  // totalPrice() {
  //   this.total = this._shopping.reduce((accumulateur, currentProduct) => {
  //     return accumulateur += currentProduct.pricePromo;
  //   }, 0)
  //   return this.total;
  // }



}
