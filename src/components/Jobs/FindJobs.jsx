import React from 'react';
import Form from './Form';

export default function FindJobs() {
  return(
    <div className='flex flex-col flex-wrap justify-center items-center'>
      { _headline() }
      <Form />
    </div>
  )
}


function _headline() {
  return (
    <div 
      className="headline"
    >
      Please choose a bubble or type
      your position or field of interest
    </div>
  )
}