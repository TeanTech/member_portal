import { fetchData } from './script.js';

/**
 * Get active loans for a specific member and station.
 * @param {string} memberNumber - The unique identifier for the member.
 * @param {string} stationId - The identifier for the station.
 * @returns {Promise<number[]>} - List of active loan IDs.
 */
const getActiveLoans = async (memberNumber, stationId) => {
  return fetchData('/active-loans', { memberNumber, stationId });
};

export default getActiveLoans;