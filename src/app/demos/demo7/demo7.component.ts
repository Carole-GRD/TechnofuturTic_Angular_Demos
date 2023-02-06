// import { Component, OnDestroy, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
// export class Demo7Component implements OnInit, OnDestroy {
export class Demo7Component implements OnInit {

  connectedUser?: User;

  login: string = '';
  password: string = '';

  constructor(
    private _loginService: LoginService
  ){}

  // Fonction qui se lance lorsque le composant apparait sur la page
  ngOnInit(): void {
    this.connectedUser = this._loginService.connectedUser;
  }

  // Fonction qui se lance lorsque le composant disparait
  // ngOnDestroy(): void {

  // }

  connection(): void {
    // Si la personne n'a rien tapé dans login, on n'appelle pas le service pour rien
    if (this.login.trim()) {
      this._loginService.login(this.login, this.password);  
      // -> Undifined ou User connecté
      console.log(this.login, this.password);
      console.log('Hello button');

      // Mettre à jour le visuel avec le service
      this.connectedUser = this._loginService.connectedUser;

      // Si la personne s'est connectée, on reset les infos des input
      if(this.connectedUser) {
        this.login = '';
        this.password = '';
      }
    }
  }

  deconnection(): void {
    this._loginService.logout();
    this.connectedUser = this._loginService.connectedUser;
  }

}
