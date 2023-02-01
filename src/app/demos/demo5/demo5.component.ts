import { Component } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component {
  isOpen: boolean = false;

  fruits: string[] = ['Pomme', 'Poire', 'Pêche'];

  fruitName: string = '';

  addFruit() {
    this.fruits.push(this.fruitName);
  }

  
}
