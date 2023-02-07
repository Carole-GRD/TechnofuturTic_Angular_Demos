import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Shopping } from '../types/shopping';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  @Input() product!: Shopping;
  @Input() shopping!: Shopping[];
  @Input() total!: number;
  

  constructor(
    private _shoppingService: ShoppingService
  ){}

  ngOnInit(): void {
    this.shopping = this._shoppingService.getAll();
    this.total = this._shoppingService.total;
  }

  deleteProduct() {
    this._shoppingService.deleteProduct(this.product, this.product.pricePromo, this.total);
  }

  incrProduct() {
    this._shoppingService.incrProduct(this.product, this.product.pricePromo, this.total);

  }

  decrProduct() {
    this._shoppingService.decrProduct(this.product, this.product.pricePromoUnite, this.total);
  }
  
}
