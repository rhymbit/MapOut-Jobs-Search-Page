import React from 'react';

import userIcon from '../../icons/users.png';
import mapPinIcon from '../../icons/map-pin.png';
import briefcaseIcon from '../../icons/briefcase.png';
import dollarSignIcon from '../../icons/dollar-sign.png';
import clockIcon from '../../icons/clock.png';
import arrowIcon from '../../icons/arrow.png';
import indeedIcon from '../../icons/indeed.png';
import linkedinIcon from '../../icons/linkedin.png';
import freelancerIcon from '../../icons/freelancer.png';

export default function JobCard(props) {

  const {
    title,
    company,
    employeeCount,
    industry,
    location,
    experience,
    salary,
    jobType,
    summary,
  } = {...props.job}


  return (
    <div className="card">

      <div className='text-gray-800 text-3xl font-semibold'>{title}</div>

      <div className='mt-5 ml-2 text-2xl text-gray-600'>{company}</div>
      
      <div className='grid grid-cols-4 my-4 justify-between'>
        <div className='flex col-start-1 text-center'>
          <img
            src={userIcon}
            alt='user icon'
            className='w-6 h-6 mr-2'
          />
          { employeeCount > 10 ? 
          `More than 1000 employees` : `${employeeCount} employees`}
        </div>

        <div className='flex col-start-3 border-2 border-yellow-400 w-40 h-20 rounded-3xl p-2 text-center'>
          {industry}
        </div>
  
      </div>

      <div className='grid grid-cols-3 my-4 justify-between'>
                 
        <div className='flex col-start-1 col-span-2'>
          <img
            src={mapPinIcon}
            alt='map pin icon'
            className='w-6 h-6 mr-2'
          />
          {location}
        </div>
        
        <div className='flex col-start-3'>
          <img
            src={briefcaseIcon}
            alt='briefcase icon'
            className='w-6 h-6 mr-2'
          />
          {experience}
        </div>

      </div>

      <div className='grid grid-cols-3 my-4 justify-between'>
                 
        <div className='flex col-start-1'>
          <img
            src={dollarSignIcon}
            alt='dollar sign icon'
            className='w-6 h-6 mr-2'
          />
          {salary}
        </div>
        
        <div className='flex col-start-3'>
          <img
            src={clockIcon}
            alt='clock icon'
            className='w-6 h-6 mr-2'
          />
          {jobType}
        </div>

      </div>

      <div className='flex my-2 max-h-28 overflow-y-scroll card-summary'>
        <img
          src={arrowIcon}
          alt='arrow icon'
          className='w-3 h-3 my-1 mr-2'
        />
        {summary}
      </div>

      <div className='flex justify-between'>

        <div className="text-gray-400">Apply in</div>

        <div className="flex w-32 justify-between">
          <img
            src={indeedIcon}
          />
          <img
            src={linkedinIcon}
          />
          <img
            src={freelancerIcon}
          />
        </div>
      </div>
    </div>
  )
}