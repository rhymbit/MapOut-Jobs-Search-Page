import React, { useEffect, useState } from 'react';
import Form from './Form';
import JobCard from '../Cards/JobCard';
import jobsSampleData from './jobsSampleData'

import { Country } from 'country-state-city';
import Spinner from '../Spinner/Spinner';


export default function FindJobs() {

  const [jobsData, setJobsData] = useState([]);
  const [onGoingRequest, setOnGoingRequest] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setJobsData(jobsData => [...jobsData, ...jobsSampleData.jobs]);
  //   }, 3000)}, [])

  return(
    <div className='grid grid-rows-12 h-full'>

      <div className="row-start-2">
        { _headline() }
      </div>

      <div className="row-start-4">
        <Form setJobsData={setJobsData} onGoingRequest={onGoingRequest} setOnGoingRequest={setOnGoingRequest}/>
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

        <div className="row-start-10 animate-jobs-list mb-10">
          {
            onGoingRequest ?
            <div className='flex justify-center items-center'>
              <Spinner style="border-4 h-36 w-36" />
            </div>
            :
              null
          }
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

  return (
    <div className='flex flex-wrap justify-center'>
      { jobsData.map((job, index) => {
        
        return ( job && 
          <div key={index} className="mx-3 animate-jobs-list">
            <JobCard job={job}/>
          </div>
        )
      })}
    </div>
  )
}