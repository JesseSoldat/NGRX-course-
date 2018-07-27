import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
// rxjs
import { tap } from "rxjs/operators";
import { defer, of } from "rxjs";

import { AuthActionTypes, Login, Logout } from "./auth.actions";

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.action$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action =>
      localStorage.setItem("user", JSON.stringify(action.payload.user))
    )
  );

  @Effect({ dispatch: false })
  logout$ = this.action$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAcion),
    tap(action => {
      localStorage.removeItem("user");
      this.router.navigateByUrl("/login");
    })
  );

  constructor(private action$: Actions, private router: Router) {}
}
