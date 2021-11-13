const getEnvironment = () => {
  return window.location.hostname === 'localhost' ? 'development' : 'production';
}

const environment = getEnvironment()


const config = {
  development: {
    'apiBaseUrl': 'https://staging.mapout.com/mapout-node/joblist/internshala-jobs?',
    'countryApiUrl': 'https://api.countrystatecity.in/v1/countries/IN',
  },
  production: {
    'apiBaseUrl': 'https://staging.mapout.com/mapout-node/joblist/monster-jobs?',
    'countryApiUrl': 'https://api.countrystatecity.in/v1/countries',
  }
};

export default Object.freeze(config[environment])
export { getEnvironment }