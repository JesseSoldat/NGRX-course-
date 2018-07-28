import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
// model
import { Course } from "../model/course.model";
// actions
import { CourseActions, CourseActionTypes } from "./course.actions";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialCoursesState: CoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = (
  state = initialCoursesState,
  action: CourseActions
) => {
  switch (action.type) {
    case CourseActionTypes.CourseLoaded:
      return adapter.addOne(action.payload.course, state);

    case CourseActionTypes.AllCoursesLoaded:
      // console.log("ALL COURSES LOADED", action.payload.courses);
      return adapter.addAll(action.payload.courses, {
        ...state,
        allCoursesLoaded: true
      });

    default:
      return state;
  }
};

export const { selectAll } = adapter.getSelectors();
