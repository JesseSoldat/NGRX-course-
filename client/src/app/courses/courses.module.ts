import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// material
import {
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
// ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { coursesReducer } from "./course.reducers";
import { CourseEffects } from "./course.effects";
// services
import { CoursesService } from "./services/courses.service";
import { CourseResolver } from "./services/course.resolver";
// components
import { HomeComponent } from "./home/home.component";
import { CourseComponent } from "./course/course.component";

export const coursesRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":id",
    component: CourseComponent,
    resolve: {
      course: CourseResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(coursesRoutes),
    StoreModule.forFeature("courses", coursesReducer),
    EffectsModule.forFeature([CourseEffects]),
    // material
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  declarations: [HomeComponent, CourseComponent],
  providers: [CoursesService, CourseResolver]
})
export class CoursesModule {}
