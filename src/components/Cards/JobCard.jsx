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
    jobtype,
    summary,
    link,
  } = {...props.job}


  return (
    <div className="card">

      <div className='text-gray-800 text-3xl font-semibold'>
        {
          title.length > 43 ?
            <div className='text-xl max-h-20 overflow-y-scroll '>
              {title}
            </div>
          :
            title
        }
      </div>

      <div className='mt-5 ml-2 text-2xl text-gray-600'>{company}</div>
      
      <div className='grid grid-cols-4 my-4 justify-between'>
        <div className='flex col-start-1 text-center'>
          <img
            src={userIcon}
            alt='user icon'
            className='w-6 h-6 mr-2'
          />
          {
            employeeCount ? 
              employeeCount > 10 ? 
                `More than 1000 employees` : `${employeeCount} employees`
            :
              `Employee count unknown`
          }
        </div>

        <div className='flex justify-center text-center p-1 col-start-3 border-2 border-yellow-400 w-40 h-14 rounded-3xl'>
          {
            industry.startsWith('Banking') ?
              `Banking / Account/ Finance`
            :
              industry
          }
        </div>
  
      </div>

      <div className='grid grid-cols-3 my-4 justify-between'>
                 
        <div className='flex col-start-1 col-span-2'>
          <img
            src={mapPinIcon}
            alt='map pin icon'
            className='w-6 h-6 mr-2'
          />
          <div className='w-28'>
            {
              location ?
                location.length > 0 ?
                  location
                :
                  `Hybrid`
              :
                `Job Location Unknown`
            }
          </div>
        </div>
        
        <div className='flex col-start-3'>
          <img
            src={briefcaseIcon}
            alt='briefcase icon'
            className='w-6 h-6 mr-2'
          />
          {
            experience ?
              experience
            :
              `Experience details not provided`
          }
        </div>

      </div>

      <div className='grid grid-cols-3 my-4 justify-between'>
                 
        <div className='flex col-start-1 col-span-2'>
          <img
            src={dollarSignIcon}
            alt='dollar sign icon'
            className='w-6 h-6 mr-2'
          />
          <div className='w-28'>
          {
            salary ?
              salary
            :
              `Salary not provided`
          }
          </div>
        </div>
        
        <div className='flex col-start-3'>
          <img
            src={clockIcon}
            alt='clock icon'
            className='w-6 h-6 mr-2'
          />
          {jobtype}
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

        <div className="text-gray-400">
          <a href={link} target="_blank">Apply in</a>
        </div>

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