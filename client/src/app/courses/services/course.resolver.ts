import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
// models
import { Course } from "../../model/course.model";
// ngrx
import { select, Store } from "@ngrx/store";
import { AppState } from "../../reducers";
import { selectCourseById } from "../course.selectors";
import { CourseRequested } from "../course.actions";
// rxjs
import { Observable } from "rxjs";
import { tap, filter, first } from "rxjs/operators";

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> {
    const courseId = route.params["id"];

    return this.store.pipe(
      select(selectCourseById(courseId)),
      tap(course => {
        if (!course) {
          this.store.dispatch(new CourseRequested({ courseId }));
        }
      }),
      filter(course => !!course),
      first()
    );
  }
}
