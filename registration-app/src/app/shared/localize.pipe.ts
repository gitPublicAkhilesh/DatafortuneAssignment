import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localize',
  pure: true
})
export class LocalizePipe implements PipeTransform {
  private dictionary: { [key: string]: string } = {
    login: 'Login',
  password: 'Password',
  loginInstruction: 'Please enter the case-sensitive password from your official invitation.',
 contactInformation: 'Contact Information',
  formInstruction: 'Please fill in the following required information.',
  firstName: 'First Name',
  lastName: 'Last Name',
  state: 'State',
  selectState: 'Select State',
  emailInstruction1: 'Please provide your email address.',
  emailInstruction2: 'All meeting correspondence will be sent via email.',
  email: 'Email',
  confirmEmail: 'Confirm Email',
  subscribe: 'Subscribe to Newsletter',
  continue: 'Continue',
  complete: 'Complete',
  thankYou: 'Thank you for registering!',
  confirmationMessage: 'You should receive a confirmation email momentarily containing additional details.'

};

  transform(key: string): string {
    return this.dictionary[key] || key;
  }
}
