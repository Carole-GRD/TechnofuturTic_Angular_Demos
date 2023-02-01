import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {
  time: number = 0;
  
  setChrono: any;
  // setChrono?: ReturnType<typeof setInterval>;

  start() {
    this.setChrono = setInterval(() => {
      return this.time += 1; 
    }, 1000);
  }

  stop() {
    clearInterval(this.setChrono);
    this.setChrono = undefined;

  }

  reset() {
    this.stop();
    this.time = 0;
  }

}
