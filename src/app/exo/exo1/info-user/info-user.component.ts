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
    this.hobby = 'volley';
    this.pseudo = 'c.gerard';
  }

  getInfo() {
    return `${this.age} ${this.hobby} ${this.pseudo}`;
  }
}
