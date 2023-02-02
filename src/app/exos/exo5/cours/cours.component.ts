import { Component } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent {
  
  cours: Cours[] = [
    new Cours('HTML', 'Mettre en page des sites web'),
    new Cours('CSS', 'Les rendre plus ou moins beaux'),
    new Cours('JavaScript', 'Les rendre dynamiques'),
    new Cours('C#', 'Un super langage orienté objet')
  ]  

  isOpen(cour: Cours) {
    // Stocker la valeur (du booleen "isActive") du cours checké
    let isChecked: boolean;
    isChecked = cour.isActive;

    // mettre toutes les valeurs à "false"
    this.cours.forEach((cour) => cour.isActive = false);

    // inverser la valeur initiale du cours checké
    cour.isActive = !isChecked;
  }
}


export class Cours {
  title: string;
  description: string;
  isActive: boolean;

  constructor(title: string, decription: string, isActive: boolean = false) {
    this.title = title;
    this.description = decription;
    this.isActive = isActive;
  }
  
}



