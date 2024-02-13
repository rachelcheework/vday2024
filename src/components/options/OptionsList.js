import React, { useState } from 'react';
import '../../cssfiles/common.css';
import './OptionsList.css';

const OptionsList = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onSelect(option); // Call onSelect callback with selected option; used on page where this OptionsList component is called
  };

  return (
    <div>
      <p>Select one option:</p>
      <div className='options-wrapper'>
        {options.map((option) => (
          <div key={option}>
            <div className='option-item'>
              <button className='option-button' onClick={() => handleOptionChange(option)}>
                <img className='option-img' src={option[1]} alt={option[0]}/>
              </button>
              <p className='img-label'>{option[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsList;

