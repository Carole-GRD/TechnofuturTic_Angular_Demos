import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
  message: string;
  age: number;
  birthDate: Date;
  price: number;

  constructor() {
    this.message = "Salut tout le monde";
    this.age = 26;
    this.birthDate = new Date();
    this.price = 10.58;
  }
}
