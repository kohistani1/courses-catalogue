import React from 'react';

function Button({ bg }) {
  return (
    <>
      <button className={`btn ${bg}`}> Enrol Now</button>
    </>
  );
}

export default Button;
