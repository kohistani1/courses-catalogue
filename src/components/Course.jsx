import React from 'react';
import Button from './Button';

function Course({ title, duration, bg }) {
  return (
    <div className='card'>
      <p>Course</p>
      <h2 className={bg}>{title}</h2>
      <p>
        <span className='dur'> Duration </span>: {duration} day
      </p>
      <Button bg={bg} />
    </div>
  );
}

export default Course;
