import appConfig from "../../app.config"

async function fetchJobs(keyword, location, signal=null) {

  const url = `${appConfig.apiBaseUrl}keyword=${keyword}&location=${location}`;
  // const url = `https://swapi.dev/api/people/4`
  // const url = `https://deelay.me/5000/https://picsum.photos/200/300`;


  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    signal: signal
  }

  let response = await fetch(url, options);

  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }

}

export default fetchJobs;