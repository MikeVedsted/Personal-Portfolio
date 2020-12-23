import React from "react";

import { courseList } from "../../resources/text/";

function Courses() {
  return (
    <section>
      <h2>{courseList.title.toUpperCase()}</h2>
      <ul>
        {courseList.courses.map((course) => (
          <li>
            {course.end}
            <span className="separator">/</span>
            {course.title}
            <span className="separator">/</span>
            {course.intructor}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;
