import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
// rxjs
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
// model
import { Course } from "../../model/course.model";

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  findCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseId}`);
  }

  findAllCourses(): Observable<Course[]> {
    return this.http.get("/api/courses").pipe(map(res => res["payload"]));
  }
}
