import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {
  time: number = 0;
  isDisabled: boolean = false;
  
  chrono: any = 0;

  start() {
    this.chrono = setInterval(() => {
      return this.time += 1; 
    },1000);
    this.toggleDisabled();
  }

  stop() {
    clearInterval(this.chrono);

    // ATTENTION : setInterval pourrait retourner la valeur 0
    // utiliser "undefined" !!!
    // this.chrono = 0;
    this.chrono = undefined;
    this.toggleDisabled();
  }

  reset() {
    clearInterval(this.chrono);
    this.isDisabled = false;
    this.chrono = undefined;
    this.time = 0;
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

}
