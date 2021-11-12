import React, { useState } from "react";
import fetchJobs from "../../api/jobsAPI";
import jobLocations from "./jobLocations";
import jobTypes from "./jobTypes";

export default function Form(props) {

  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const {
    setJobsData
  } = {...props};

  const onFormSubmit = (e) => {
    console.log(jobType, jobLocation);
    try {
      fetchJobs(jobType, jobLocation)
        .then(res => {
          console.log(res.jobs);
          setJobsData(res.jobs);
        })
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='flex flex-wrap justify-evenly'>
        { _jobTypeInput(setJobType)}
        { _jobLocationInput(setJobLocation)}
        {_submitButton(onFormSubmit)}
    </div>
  );
}


function _jobTypeInput(setJobType) {
  return(
    <select 
      name="jobType" 
      id="jobType" 
      onChange={e => setJobType(e.target.value)}
      className="select-box"
    >
      <option selected className='hidden'>Job Type</option>

      {
        jobTypes.map(jobType => 
        <option 
          key={jobType}
        >
            {jobType}
        </option>) 
      }
    </select>
  )
}


function _jobLocationInput(setJobLocation) {
  return (
    <select 
      name="jobLocation" 
      id="jobLocation"
      onChange={e => setJobLocation(e.target.value)}
      className="select-box"
    >
      <option selected className='hidden'>Job Location</option>

      { 
        jobLocations.map(jobLocation => 
          <option 
            key={jobLocation}
          >
            {jobLocation}
          </option>) 
      }
    </select>
  )
}

function _submitButton(onFormSubmit) {
  return (
    <button
      type="submit"
      className="p-2 mt-14 w-24 h-12 bg-green-500 rounded-full font-bold text-white hover:bg-green200"
      onClick={(e) => {
        e.preventDefault();
        onFormSubmit(e);
      }}
      >Search
    </button>
  )
}