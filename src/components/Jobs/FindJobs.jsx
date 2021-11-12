import React, { useState } from 'react';
import Form from './Form';
import JobCard from '../Cards/JobCard';


export default function FindJobs() {

  const [jobsData, setJobsData] = useState([]);

  let controller = new AbortController();

  return(
    <div className='grid grid-rows-12'>

      <div className="row-start-2">
        { _headline() }
      </div>

      <div className="row-start-4">
        <Form setJobsData={setJobsData} controller={controller}/>
      </div>

      <div className="row-start-7">
        {
          jobsData.length > 0 ?
            _displayJobs(jobsData)
          :
            null
        }
      </div>

    </div>
  )
}


function _headline() {
  return (
    <div className="mt-10 grid grid-cols-8">
      <div className='col-start-3 col-span-4 text-3xl text-center justify-center'>
        Please <b className='mx-1'>choose</b> a bubble or type
        your position or field of interest
      </div>
    </div>
  )
}

function _displayJobs(jobsData) {

  console.log(jobsData)

  return (
    <div className='flex flex-wrap mx-10 justify-center'>
      { jobsData.map((job, index) => {
        return (
          <div key={index} className='mx-3'>
            <JobCard job={job}/>
          </div>
        )
      })}
    </div>
  )
}