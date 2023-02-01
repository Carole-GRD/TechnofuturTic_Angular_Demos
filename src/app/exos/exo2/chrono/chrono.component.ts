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

    this.chrono = 0;
    this.toggleDisabled();
  }

  reset() {
    clearInterval(this.chrono);
    this.isDisabled = false;
    this.chrono = 0;
    this.time = 0;
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

}
