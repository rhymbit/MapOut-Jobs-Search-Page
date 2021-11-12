import appConfig from "../../app.config"

async function fetchJobs(keyword, location) {

  const url = `${appConfig.apiBaseUrl}keyword=${keyword}&location=${location}`;
  // const url = `https://swapi.dev/api/people/4`

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
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