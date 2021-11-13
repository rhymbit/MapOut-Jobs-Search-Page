
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

        <div className='flex justify-center mt-14'>
          <div className='text-2xl text-gray-700'>
            {
              jobsData.length > 0 ?
                `Total Jobs: ${jobsData.length}`
              :
                null
            }
          </div>
        </div>

        <div className="jobs-list">
          {_displayJobs(jobsData)}
        </div>

      </div>

    </div>
  )
}


function _headline() {
  return (
    <div className='mt-10 flex justify-center'>
      <div className='text-3xl text-center max-w-md'>
        Please <b className='mx-1'>choose</b> a bubble or type
        your position or field of interest
      </div>
    </div>
  )
}

function _displayJobs(jobsData) {

  console.log(jobsData)

  return (
    <div className='flex flex-wrap justify-center jobs-list'>
      { jobsData.map((job, index) => {
        return (
          <div key={index} className="mx-3 jobs-list">
            <JobCard job={job}/>
          </div>
        )
      })}
    </div>
  )
}