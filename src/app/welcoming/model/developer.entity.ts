/**
 * Developer entity
 * @summary
 * This class represents a developer entity.
 * @export
 * @class Developer
 * @property {string} _firstName - First name of the developer
 * @property {string} _lastName - Last name of the developer
 * @property {string} fullName - Full name of the developer
 * @constructor
 * @param {string} firstName - First name of the developer
 * @param {string} lastName - Last name of the developer
 *
 */

export class Developer {
  private _firstName: string;
  private _lastName: string;

  /**
   * Creates an instance of Developer.
   * @param firstName
   * @param lastName
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Full name of the developer
   * @readonly
   * @type {string}
   */
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`.trim();
  }
}
