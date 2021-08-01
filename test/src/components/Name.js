import './Name.css';
import { useState } from 'react';

function Name({ name }) {
  return (
    <div className='name'>
      <div>name : {name}</div>
    </div>
  );
}

export default Name;
