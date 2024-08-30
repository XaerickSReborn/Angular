import {Component, Input} from '@angular/core';
import {Developer} from "../../model/developer.entity";

/**
 * WelcomeComponent is a standalone component that displays a welcome message to the user.
 * @export
 * @summary
 * The component has two input properties, firstName and lastName, which are used to display the user's full name.
 * The component also has a getter property, fullName, which returns the full name of the user.
 */
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  /**
   * The first name of the user.
   */
  @Input() firstName!: string;

  /**
   * The last name of the user.
   */
  @Input() lastName!: string;

  /**
   * Returns the full name of the user.
   * @returns
   * The full name of the user.
   **/
  get fullName(): string {
    let developer = new Developer(this.firstName, this.lastName);
    return developer.fullName;
  }
}
