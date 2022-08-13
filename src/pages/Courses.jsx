import React from 'react';
import Course from '../components/Course';
import '../courses.css';
import courses from '../data';

function Courses() {
  return (
    <div>
      <div className='row'>
        {courses[0].map((course, idx) => (
          <Course key={idx} {...course} />
        ))}
      </div>
      <div className='row'>
        {courses[1].map((course, idx) => (
          <Course key={idx} {...course} />
        ))}
      </div>
      <div className='row'>
        {courses[2].map((course, idx) => (
          <Course key={idx} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
