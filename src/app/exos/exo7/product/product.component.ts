import { Component, Input } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Shopping } from '../types/shopping';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: Shopping;


  constructor(
    private _shoppingService: ShoppingService
  ){}


}
