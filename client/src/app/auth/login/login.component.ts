import { Component, ViewEncapsulation } from "@angular/core";
// rxjs
import { tap } from "rxjs/operators";
import { noop } from "rxjs";

// services
import { AuthService } from "../auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  login() {
    const email = "test@angular-university.io";
    const password = "test";

    this.auth
      .login(email, password)
      .pipe(
        tap(user => {
          console.log(user);
        })
      )
      .subscribe(noop, err => alert("Login Failed"));
  }
}
