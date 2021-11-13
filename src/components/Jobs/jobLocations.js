import { Country } from 'country-state-city';

let jobLocations = Country.getAllCountries().map(country => country.name)

export default jobLocations;