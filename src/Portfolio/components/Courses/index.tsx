import React from "react";

import { courseList } from "../../resources/text/";

const Courses = () => {
  return (
    <section>
      <h2>{courseList.title.toUpperCase()}</h2>
      <ul>
        {courseList.courses.map((course) => (
          <li key={course.title}>
            {course.end}
            <span className="Separator">/</span>
            {course.title}
            <span className="Separator">/</span>
            {course.instructor}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
