import React, { useEffect, useState } from "react";
import fetchJobs from "../../api/jobsAPI";
import Spinner from "../Spinner/Spinner";
import jobLocations from "./jobLocations";
import jobTypes from "./jobTypes";

export default function Form(props) {

  const [jobType, setJobType] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const [onGoingRequest, setOnGoingRequest] = useState(false);
  const [aborted, setAborted] = useState(false);

  const {
    setJobsData,
    // controller,
  } = {...props}

  let controller = new AbortController();

  const onFormSubmit = (e) => {

    console.log(controller.signal);
    
    if (!onGoingRequest) {
      
      setAborted(false);
      setOnGoingRequest(true);

      console.log(jobType, jobLocation);

      try {
        fetchJobs(jobType, jobLocation, controller.signal)
          .then(res => {
            aborted ? null : setJobsData(res);
            setOnGoingRequest(false);
          })
      } catch (error) {
          setOnGoingRequest(false);
          // console.log(error)
      }
    } else {
      controller.abort();
      setAborted(true);
      setOnGoingRequest(false);
    }

  }

  const onCancel = () => {
    controller.abort();
    console.log(signal)
  }

  return (
    <div className='flex flex-wrap justify-evenly mt-14'>
        { _jobTypeInput(setJobType)}
        { _jobLocationInput(setJobLocation)}
        {_submitButton(onFormSubmit, onCancel, onGoingRequest)}
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

function _submitButton(onFormSubmit, onCancel, onGoingRequest) {
  return (
    <button
      id="jobSearchButton"
      type="submit"
      className="p-2 w-32 bg-green-500 rounded-full font-bold text-white hover:bg-green-300"
      onClick={(e) => {
        e.preventDefault();
        onFormSubmit(e);
      }}
    >
      {
        onGoingRequest ? 
          <div className="flex justify-between">
            {_toggleSubmitButtonColor(onGoingRequest)}
            <Spinner style="border-4 border-white-200 h-8 w-8"/> Cancel
          </div>
        :
          <div>
            {_toggleSubmitButtonColor(onGoingRequest)}
            Search
          </div> 
      }

    </button>
  )
}

function _toggleSubmitButtonColor(onGoingRequest) {

  let button = document.getElementById("jobSearchButton");

  if (button){
    if (onGoingRequest) {
      button.classList.remove("bg-green-500");
      button.classList.remove("hover:bg-green-300");
      button.classList.add("bg-red-500");
      button.classList.add("hover:bg-red-300");
    } else {
      button.classList.remove("bg-red-300");
      button.classList.remove("hover:bg-red-300");
      button.classList.add("bg-green-500");
      button.classList.add("hover:bg-green-300");
    }
  }
}