import React from 'react';

function CourseDetails() {
  const courses = [
    { cname: 'Angular', cdate: '4/5/2021' },
    { cname: 'React', cdate: '6/3/20201' }
  ];

  return (
    <div className="column">
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.cname}</h3>
          <h4>{course.cdate}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
