import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

// @Injectable()
// providers: [ LoginService ]
// à ajouter dans "demos.module.ts" pour y avoir accès dans tout ce module "Demos"


export class LoginService {

  private _users: User[] = [
    new User(1, "ln1", "fn1", "l1", "123"),
    new User(2, "ln2", "fn2", "l2", "456"),
    new User(3, "ln3", "fn3", "l3", "789"),
  ];

  connectedUser?: User;

  constructor() { }

  login(userLogin: string, userPassword: string) {
    // On va vérifier si le login est présent dans la base de données.
    this.connectedUser = this._users.find((user) => user.login === userLogin);
    if (this.connectedUser) {
      // Si on l'a trouvé, si la password n'est pas OK
      if (this.connectedUser.password !== userPassword) {
        this.connectedUser = undefined;
      }
    }
    else {
      // Pas nécessaire puisqu'on stocke déjà undifined avec le find()
      this.connectedUser = undefined;
    }
    console.log(this.connectedUser);
  }

  logout() {
    this.connectedUser = undefined;
  }
}
