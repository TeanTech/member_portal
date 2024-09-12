// /public/main.js

import getActiveLoans from '../api/getActiveLoans.js';

document.addEventListener('DOMContentLoaded', () => {
  const memberNumber = '1145';
  const stationId = 'CR1697'; 

  getActiveLoans(memberNumber, stationId)
    .then(activeLoans => {
      console.log('Active Loans:', activeLoans);


      //loans on the webpage
      const loansContainer = document.getElementById('loans-container');
      if (loansContainer) {
        loansContainer.innerHTML = activeLoans.map(loan => `<li>${loan}</li>`).join('');
      }
    })
    .catch(error => {
      console.error('Error fetching active loans:', error);
    });
});
