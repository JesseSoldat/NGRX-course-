import { Component, OnInit } from "@angular/core";
// rxjs
import { Observable } from "rxjs";
// models
import { Course } from "../../model/course.model";
// ngrx
import { AppState } from "../../reducers";
import { select, Store } from "@ngrx/store";
import {
  selectAdvancedCourses,
  selectAllCourses,
  selectBeginnerCourses,
  selectPromoTotal
} from "../course.selectors";
import { AllCoursesRequested } from "../course.actions";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  promoTotal$: Observable<number>;

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AllCoursesRequested());

    this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

    this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

    this.promoTotal$ = this.store.pipe(select(selectPromoTotal));
  }
}
