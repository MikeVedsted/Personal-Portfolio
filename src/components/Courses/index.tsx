import React from "react";

import { courseList } from "../../resources/text/";

function Courses() {
  return (
    <section>
      <h2>{courseList.title.toUpperCase()}</h2>
      {courseList.courses.map((course) => (
        <ul key={course.end}>
          <li>{course.end}</li>
          <li className="separator">/</li>
          <li>{course.title}</li>
          <li className="separator">/</li>
          <li>{course.intructor}</li>
        </ul>
      ))}
    </section>
  );
}

export default Courses;
