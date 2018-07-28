import { Component, OnInit } from "@angular/core";
// rxjs
import { Observable } from "rxjs";
// models
import { Course } from "../../model/course.model";
// ngrx
import { AppState } from "../../reducers";
import { select, Store } from "@ngrx/store";
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
  }
}
