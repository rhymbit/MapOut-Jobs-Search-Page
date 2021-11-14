import React, { useState } from 'react';
import JobCard from '../Cards/JobCard';
import Spinner from '../Spinner/Spinner';
import Form from './Form';


const JobsContext = React.createContext('jobsContext');


export default function FindJobs() {

  const [jobsData, setJobsData] = useState([]);
  const [onGoingRequest, setOnGoingRequest] = useState(false);

  const provider = {
    jobsData,
    setJobsData,
    onGoingRequest,
    setOnGoingRequest,
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setJobsData(jobsData => [...jobsData, ...jobsSampleData.jobs]);
  //   }, 3000)}, [])

  return(
    <JobsContext.Provider value={provider}>
      <div className='grid grid-rows-12 h-full'>

        <div className="row-start-2">
          { _headline() }
        </div>

        <div className="row-start-4">
          <Form />
        </div>

        <div className="row-start-7">

          <div className='flex justify-center mt-14'>
            <div className='text-2xl text-gray-700'>
              {
                jobsData.length && !onGoingRequest > 0 ?
                  `Total Jobs: ${jobsData.length}`
                :
                  null
              }
            </div>
          </div>

          <div className="row-start-10 animate-fade-in mb-10">
            {
              onGoingRequest ?
              <div className='flex justify-center items-center'>
                <Spinner style="border-4 h-36 w-36" />
              </div>
              :
                <>
                  {_displayJobs(jobsData)}
                </>
            }
          
          </div>

        </div>

      </div>
    </JobsContext.Provider>
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
          <div key={index} className="mx-3 animate-fade-in">
            <JobCard job={job}/>
          </div>
        )
      })}
    </div>
  )
}


export { JobsContext };
