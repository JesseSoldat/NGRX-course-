import { Component, Input } from "@angular/core";
// material
import { MatDialog, MatDialogConfig } from "@angular/material";
// model
import { Course } from "../../model/course.model";

@Component({
  selector: "courses-card-list",
  templateUrl: "./courses-card-list.component.html",
  styleUrls: ["./courses-card-list.component.scss"]
})
export class CoursesCardListComponent {
  @Input() courses: Course[];

  constructor(private dialog: MatDialog) {}
}
