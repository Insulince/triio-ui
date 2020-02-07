import {Component, OnInit} from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

import {ValidationService} from "../../services/validation/validation.service";
import {ApiService} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: "triio-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  readonly strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})");
  readonly mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

  passwordStrength: string;

  registerForm = new FormGroup ({
    name: new FormControl()
  });

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private router: Router) {
    this.createForm();
    this.onPasswordChanges();
  }

  onPasswordChanges() {
    this.registerForm.get("password").valueChanges.subscribe((password) => {
      if (this.strongRegex.test(password)) {
        this.passwordStrength = "strong";
      } else if (this.mediumRegex.test(password)) {
        this.passwordStrength = "good";
      } else if (password.length === 0) {
        this.passwordStrength = "none";
      } else {
        this.passwordStrength = "weak";
      }
    });
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: ["", [Validators.required, ValidationService.usernameValidator] ],
      email: ["", [Validators.required, ValidationService.emailValidator] ],
      password: ["", [Validators.required, ValidationService.passwordValidator] ],
    });
  }

  public userRegister(): void {
    // TODO: Add that pristine or invalid shit.
    this.apiService.register(this.registerForm.get("username").value, this.registerForm.get("email").value, this.registerForm.get("password").value).subscribe(
      (response: any): void => {
        console.log("SUCCESS");
        console.log(response);

        this.router.navigate(["/home"]);
      },
      (error: Error): void => {
        console.log("ERROR");
        console.log(error);
      },
      (): void => {
        console.log("COMPLETE");
      }
    );
  }
}
