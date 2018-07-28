import { Injectable } from "@angular/core";
// rxjs
import {
  mergeMap,
  map,
  catchError,
  withLatestFrom,
  filter,
  tap
} from "rxjs/operators";
import { throwError } from "rxjs";
// ngrx
import { select, Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AppState } from "../reducers";
import {
  AllCoursesLoaded,
  AllCoursesRequested,
  CourseActionTypes,
  CourseRequested,
  CourseLoaded
} from "./course.actions";
import { allCoursesLoaded } from "./course.selectors";
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

  @Effect()
  loadAllCourses$ = this.actions$.pipe(
    ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
    withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
    filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
    mergeMap(() => this.coursesService.findAllCourses()),
    // tap(courses => console.log("courses", courses)),
    map(courses => new AllCoursesLoaded({ courses })),
    catchError(err => {
      console.log("Err: loadAllCourses$", err);
      return throwError(err);
    })
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store<AppState>
  ) {}
}
