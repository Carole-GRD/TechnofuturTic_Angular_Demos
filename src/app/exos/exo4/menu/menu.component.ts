import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isOpen: boolean = false;

  links: string[] = ['Link1', 'Link2', 'Link3'];
}
