// angular modules
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
// components
import { LoginComponent } from "./login/login.component";
// services
import { AuthService } from "./auth.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }])
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
