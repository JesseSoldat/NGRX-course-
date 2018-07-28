import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./course.reducers";

import * as fromCourse from "./course.reducers";

export const selectCoursesState = createFeatureSelector<CoursesState>(
  "courses"
);

export const selectCourseById = (courseId: number) =>
  createSelector(
    selectCoursesState,
    courseState => courseState.entities[courseId]
  );

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCourse.selectAll
);
