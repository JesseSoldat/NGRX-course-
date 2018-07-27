const { COURSES } = require("../db-data");

const getAllCourses = (req, res) => {
  res.status(200).json({ payload: Object.values(COURSES) });
};

const getCourseById = (req, res) => {
  const courseId = req.params["id"];

  const course = COURSES[courseId];

  res.status(200).json(course);
};

module.exports = { getAllCourses, getCourseById };
