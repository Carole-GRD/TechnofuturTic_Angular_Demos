import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { Shopping } from './types/shopping';


@Component({
  selector: 'app-exo7',
  templateUrl: './exo7.component.html',
  styleUrls: ['./exo7.component.scss']
})
export class Exo7Component implements OnInit {
  
  productName: string = '';
  productPrice: number = 0;
  productPromo: boolean = false;

  shopping: Shopping[] = [];

  // Injection des services
  constructor(
    private _shoppingService: ShoppingService
  ){}

  // @Input() total!: number;

  // Récupération des produits depuis mon service
  ngOnInit(): void {
    this.shopping = this._shoppingService.getAll();
    // this.total = this._shoppingService.total;
  }

  
  total: number = 2.65;
  addProduct() {
    this._shoppingService.addProduct(this.productName, this.productPrice, this.productPromo, this.total);
    this.total = this.shopping.reduce((accumulateur, currentProduct) => {
      return accumulateur += currentProduct.pricePromo;
    }, 0)
  }
}
