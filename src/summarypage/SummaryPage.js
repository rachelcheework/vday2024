import React from 'react';
import { Link } from 'react-router-dom';

import '../cssfiles/common.css';
import './SummaryPage.css';

function SummaryPage({ 
  selectedFood, selectedFoodImage,
  selectedActivity, selectedActivityImage,
  selectedCozy, selectedCozyImage}) {
  return (
    <div>
      <h2>Thank you for choosing! </h2>
      <h1>Here is your Date Itinerary:</h1>
        <div className='summary'>
          <div className='summary-item'>
            <img src={selectedFoodImage} alt='food'/>
            <p className='summary-p'>{selectedFood}</p>
          </div>

          <div className='summary-item'>
            <img src={selectedActivityImage} alt='activity'/>
            <p className='summary-p'>{selectedActivity}</p>
          </div>

          <div className='summary-item'>
            <img src={selectedCozyImage} alt='cozy'/>
            
            <p className='summary-p'>{selectedCozy}</p>
          </div>
      </div>
      <div className='summary-button'>
        <Link to="/page2">
                  <button>Want to choose again? Click here!</button>
        </Link>
      </div>
    </div>
  );
}

export default SummaryPage;
