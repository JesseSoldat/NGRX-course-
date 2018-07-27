// angular modules
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
// ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
// custom ngrx
import * as fromAuth from "./auth.reducer";

// material module
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
// components
import { LoginComponent } from "./login/login.component";
// services
import { AuthService } from "./auth.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),
    // ngrx
    StoreModule.forFeature("auth", fromAuth.authReducer),
    // material
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    };
  }
}
