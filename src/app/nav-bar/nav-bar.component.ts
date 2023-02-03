import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  linksExos : string[] = [
    'exo1',
    'exo2',
    'exo3',
    'exo4',
    'exo5'
  ]
  linksDemos : string[] = [
    'demo1', 
    'demo2', 
    'demo3', 
    'demo4', 
    'demo5'
  ]
}

