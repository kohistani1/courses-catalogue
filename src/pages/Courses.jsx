import React, { useState } from 'react';
import Course from '../components/Course';
import '../courses.css';
import courses from '../data';

function Courses() {
  const [row1] = useState(courses[0]);
  const [row2] = useState(courses[1]);
  const [row3] = useState(courses[2]);

  return (
    <div>
      <div className='row'>
        {row1.map((course, idx) => (
          <Course key={idx} {...course} />
        ))}
      </div>
      <div className='row'>
        {row2.map((course, idx) => (
          <Course key={idx} {...course} />
        ))}
      </div>
      <div className='row'>
        {row3.map((course, idx) => (
          <Course key={idx} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
