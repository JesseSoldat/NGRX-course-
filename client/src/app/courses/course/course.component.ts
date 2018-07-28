import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// material
import { MatPaginator, MatTableDataSource } from "@angular/material";
// model
import { Course } from "../../model/course.model";
// services
import { CoursesService } from "../services/courses.service";
// rxjs
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay
} from "rxjs/operators";
import { merge, fromEvent } from "rxjs";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {}
}
