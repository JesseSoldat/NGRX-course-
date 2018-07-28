import { Injectable } from "@angular/core";
// rxjs
import { mergeMap, map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
// ngrx
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  AllCoursesLoaded,
  AllCoursesRequested,
  CourseActionTypes,
  CourseRequested,
  CourseLoaded
} from "./course.actions";
// services
import { CoursesService } from "./services/courses.service";

@Injectable()
export class CourseEffects {
  @Effect()
  loadCourse$ = this.actions$.pipe(
    ofType<CourseRequested>(CourseActionTypes.CourseRequested),
    mergeMap(action =>
      this.coursesService.findCourseById(action.payload.courseId)
    ),
    map(course => new CourseLoaded({ course })),
    catchError(err => {
      console.log("ERR: CourseEffects - loadCourse$", err);
      return throwError(err);
    })
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
