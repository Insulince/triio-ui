import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ValidationService} from "../../services/validation/validation.service";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: "triio-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;
  loginLoading: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, ValidationService.emailValidator]],
      password: ["", Validators.required],
    });
  }

  userLogin() {
    if (this.loginForm.pristine || this.loginForm.invalid) {
      // do stuff here
      this.loginError = true;
    } else {
      this.loginLoading = true;
      this.apiService.login(this.loginForm.get("email").value, this.loginForm.get("password").value).subscribe(
        (response: any): void => {
          console.log("SUCCESS");
          console.log(response);
          this.loginLoading = false;
          this.router.navigate(["/dashboard"]);
        },
        (error: Error): void => {
          console.log("ERROR");
          console.log(error);
          this.loginLoading = false;
          this.loginError = true;
        },
        (): void => {
          console.log("COMPLETE");
          this.loginLoading = false;
          this.loginError = true;
        }
      );
    }
  }
}
