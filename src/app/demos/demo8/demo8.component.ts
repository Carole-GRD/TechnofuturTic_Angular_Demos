import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component {
  // Simple Input
  newsletter: FormControl = new FormControl('hello@msn.com');

  // Form Group
  subscriptionForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    birthDate: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl('')
    }),
  })

  hasErrorAndTouched(myForm: FormGroup, inputName: string, validator: string) {
    // return subscriptionForm.get('firstName')?.hasError('required') 
    //   && (subscriptionForm.get('firstName')?.touched || subscriptionForm.get('firstName')?.dirty)
    return myForm.get(inputName)?.hasError(validator) 
      && (myForm.get(inputName)?.touched || myForm.get(inputName)?.dirty);
  }

  handleSubmit() {
    // Vérifier que le form est valide
    if (this.subscriptionForm.valid) {
      console.log(this.subscriptionForm.value);
      this.subscriptionForm.reset();
    }
  }
}
