import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidationService {

  // standard email validation
  static emailValidator(input) {
    if (input.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { "invalidEmailAddress": true };
    }
  }
  // minimum length of 3 characters, special characters allowed
  static usernameValidator(input) {
    if (input.value.match(/^[a-zA-Z0-9.\-_$@*!]{3,30}$/)) {
      return null;
    } else {
      return { "invalidUsername": true };
    }
  }

  // Contains 8 characters, one number, one letter, one unique character
  static passwordValidator(input) {
    if (input.value.match(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/)) {
      return null;
    } else {
      return { "invalidPassword": true };
    }
  }


}
