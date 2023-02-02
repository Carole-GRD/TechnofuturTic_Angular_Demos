import { Component } from '@angular/core';
import { Cours } from '../../models/cours';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent {
  
  courses: Cours[] = [
    new Cours('HTML', 'Mettre en page des sites web'),
    new Cours('CSS', 'Les rendre plus ou moins beaux'),
    new Cours('JavaScript', 'Les rendre dynamiques'),
    new Cours('C#', 'Un super langage orienté objet')
  ]  

  toggleDescription(index: number) {
    console.log(index);
    // Mettre tous les cours isActive à false 
    this.courses.forEach((cours) => {
      if (cours.title !== this.courses[index].title) {
        cours.isActive = false;
      }
    })
    
    this.courses[index].isActive = !this.courses[index].isActive;
  }
}




