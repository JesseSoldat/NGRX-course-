import { Component, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// ngrx
import { Store } from "@ngrx/store";
import { AppState } from "../../reducers";
import { Login } from "../auth.actions";
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
  form: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.form = fb.group({
      email: ["test@angular-university.io", [Validators.required]],
      password: ["test", [Validators.required]]
    });
  }

  login() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    this.auth
      .login(email, password)
      .pipe(
        tap(user => {
          this.store.dispatch(new Login({ user }));

          this.router.navigateByUrl("/courses");
        })
      )
      .subscribe(noop, err => alert("Login Failed"));
  }
}
