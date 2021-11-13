import React, { useEffect, useState } from "react";
import fetchJobs from "../../api/jobsAPI";
import Spinner from "../Spinner/Spinner";
import jobLocations from "./jobLocations";
import jobTypes from "./jobTypes";


export default function Form(props) {

  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const [fetchController, setFetchController] = useState(null);

  const {
    setJobsData,
    onGoingRequest,
    setOnGoingRequest,
  } = {...props}


  const onFormSubmit = (e) => {
    
    let controller = new AbortController();
    setFetchController(controller);
    
    if (!onGoingRequest) {
    
      setOnGoingRequest(true);

      try {
        fetchJobs(jobType, jobLocation, controller.signal)
          .then(res => {
            setJobsData(res.jobs);
            setOnGoingRequest(false);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('Request aborted');
            } else {
              console.log(err);
            }
          })
      } catch (error) {
          setOnGoingRequest(false);
          // console.log(error)
      }
    } else {
      fetchController.abort();
      setOnGoingRequest(false);
    }

  }

  return (
    <div className='flex flex-wrap justify-evenly mt-20 text-gray-600'>

      <div className='w-full flex justify-center mb-8'>
        {
          jobType.length > 0 ?
            <div className='mx-10 flex flex-col justify-center p-2 border-2  border-yellow-700 rounded-full border-opacity-50'>
              {jobType}
            </div>
          :
            null
        }

        <div>
          {_jobTypeInput(setJobType)}
        </div>

      </div>
      
      <div className='flex flex-wrap justify-center space-x-5 space-y-3'>
        { _jobTypeSelect(setJobType)}
        { _jobLocationSelect(setJobLocation)}
        {_submitButton(onFormSubmit, onGoingRequest)}
      </div>

    </div>
  );
}

function _jobTypeInput(setJobType) {
  const onChange = (e) => {
    setJobType(e.target.value);
  }
  return (
    <input
      onChange={e => onChange(e)}
      placeholder="Type a job or select one from the list"
      className='w-80 bg-transparent border-b-2 border-gray-400 rounded-lg p-2 outline-none'
    ></input>
  )
}


function _jobTypeSelect(setJobType) {
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


function _jobLocationSelect(setJobLocation) {
  return (
    <select 
      id="jobLocation"
      name="jobLocation" 
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

function _submitButton(onFormSubmit, onGoingRequest) {

  let buttonStyle;

  onGoingRequest ?
    buttonStyle = `bg-red-500 hover:bg-red-400`
  :
    buttonStyle = `bg-yellow-600 hover:bg-yellow-500`

  return (
    <button
      id="jobSearchButton"
      type="submit"
      className={`search-button ${buttonStyle}`}
      onClick={(e) => {
        e.preventDefault();
        onFormSubmit(e);
      }}
    >
      {
        onGoingRequest ? 
          <div className="flex justify-between items-center">           
            <Spinner style="border-4 h-6 w-6 mr-2"/> 
            Cancel
          </div>
        :
          <div>
            Search
          </div> 
      }

    </button>
  )
}