import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

/**
 * Component for registering a developer.
 * @summary
 * This component is used to register a developer.
 * It contains a form with two fields for the first and last name of the developer.
 * When the form is submitted, the developerRegistered event is emitted with the first and last name of the developer.
 */
@Component({
  selector: 'app-register-developer',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-developer.component.html',
  styleUrl: './register-developer.component.css'
})
export class RegisterDeveloperComponent {
  developerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  /**
   * Event emitted when a developer is registered.
   * @summary
   * This event is emitted when the form is submitted with the first and last name of the developer.
   * @param firstName - The first name of the developer.
   * @param lastName - The last name of the developer.
   */
  @Output() developerRegistered = new EventEmitter<{ firstName: string, lastName: string }>();

  /**
   * Handles the form submission.
   * @summary
   * This method is called when the form is submitted.
   * It gets the first and last name from the form and calls the onDeveloperRegistered method with the first and last name.
   */
  onSubmit() {
    let firstName = this.developerForm.value.firstName?.toString() ?? '';
    let lastName = this.developerForm.value.lastName?.toString() ?? '';
    this.onDeveloperRegistered(firstName, lastName);
  }

  /**
   * Emits the developerRegistered event with the first and last name of the developer.
   * @param firstName - The first name of the developer.
   * @param lastName - The last name of the developer.
   */
  onDeveloperRegistered(firstName: string, lastName: string) {
    this.developerRegistered.emit({firstName, lastName});
  }
}
