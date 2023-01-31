import { Component } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent {
  age: number;
  hobby: string;
  pseudo: string;

  constructor() {
    this.age = 20;
    this.hobby = 'volley ball';
    this.pseudo = 'Carole';
  }

  getInfos() {
    return `Je suis ${this.pseudo}, j'ai ${this.age} ans et mon hobby est le ${this.hobby}.`;
  }
}
