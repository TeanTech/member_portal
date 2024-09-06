// foresightfin-api.js

const BASE_URL = 'https://api.foresightfin.app/';

/**
 * Helper function to make GET requests.
 * @param {string} endpoint - The API endpoint to fetch.
 * @param {Object} params - The query parameters.
 * @returns {Promise<Object>} - The JSON response from the API.
 */
const fetchData = async (endpoint, params = {}) => {
  const url = new URL(endpoint, BASE_URL);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

/**
 * Get active loans for a specific member and station.
 * @param {string} memberNumber - The unique identifier for the member.
 * @param {string} stationId - The identifier for the station.
 * @returns {Promise<number[]>} - List of active loan IDs.
 */
const getActiveLoans = async (memberNumber, stationId) => {
  return fetchData('/active-loans', { memberNumber, stationId });
};

/**
 * Get investments for a specific member, station, and investment code.
 * @param {string} memberNumber - The unique identifier for the member.
 * @param {string} stationId - The identifier for the station.
 * @param {number} investmentCode - The code representing the type of investment.
 * @returns {Promise<Object[]>} - List of investments with their details.
 */
const getInvestments = async (memberNumber, stationId, investmentCode) => {
  return fetchData('/investments', { memberNumber, stationId, investmentCode });
};

/**
 * Get loan details for a specific loan of a member at a station.
 * @param {string} memberNumber - The unique identifier for the member.
 * @param {string} stationId - The identifier for the station.
 * @param {number} loanId - The unique identifier for the loan.
 * @returns {Promise<Object[]>} - Loan details for the specified loan ID.
 */
const getLoanDetails = async (memberNumber, stationId, loanId) => {
  return fetchData('/loan-details', { memberNumber, stationId, loanId });
};

/**
 * Get the member profile using their phone number.
 * @param {string} phoneNumber - The phone number of the member in E.164 format.
 * @returns {Promise<Object>} - The member profile details.
 */
const getMemberProfile = async (phoneNumber) => {
  return fetchData('/member-profile', { phoneNumber });
};

// Export functions for use in other modules
export { getActiveLoans, getInvestments, getLoanDetails, getMemberProfile };
