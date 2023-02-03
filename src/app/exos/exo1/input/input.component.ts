import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputPlaceholder: string;
  inputType: string;

  constructor() {
    this.inputPlaceholder = "Remplissez ce champ !";
    this.inputType = "text";
  }
}
