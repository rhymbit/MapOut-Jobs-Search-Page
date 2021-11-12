const getEnvironment = () => {
  return window.location.hostname === 'localhost' ? 'development' : 'production';
}

const environment = getEnvironment()


const config = {
  development: {
    'apiBaseUrl': 'https://staging.mapout.com/mapout-node/joblist/monster-jobs?',
  },
  production: {
    'apiBaseUrl': 'https://staging.mapout.com/mapout-node/joblist/monster-jobs?',
  }
};

export default Object.freeze(config[environment])
export { getEnvironment }