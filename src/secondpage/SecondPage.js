import React, {useState} from "react";
import { Link } from "react-router-dom";

import OptionsList from "../components/options/OptionsList";

import Pasta from '../drawings/food_pasta.jpg';
import Soup from '../drawings/food_soup.jpg';
import DimSum from '../drawings/food_dimsum.jpg';
import Steak from '../drawings/food_steak.jpg';
import Wildcard from '../drawings/wildcard.jpg';

import '../cssfiles/common.css';

const SecondPage = ({setSelectedFood, setSelectedFoodImage}) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (option) => {
        setSelectedOption(option[0]);
        setSelectedFood(option[0]);
        setSelectedFoodImage(option[1]);
      };

    const foodList = [
    ["pasta",Pasta],
    ["soup",Soup],
    ["dim sum",DimSum],
    ["steak",Steak],
    ["wild card", Wildcard]
    ];

    return (
    <div className="main-wrapper">
        <div className="page-title">
            <h2>Let's build a date!</h2>
            <h1>What would you like to eat?</h1>
        </div>
      
        <div className="options-list">
            <OptionsList options={foodList} onSelect={handleSelect} />
        </div>
        <p>You have selected: <span className="selected-choice">{selectedOption}</span></p>

        <div className="nav-buttons">
            <Link to="/">
                <button>Go to Prev Page</button>
            </Link>

            <Link to="/page3">
                <button>Go to Next Page</button>
            </Link>
        </div>
    </div>
    );
};

export default SecondPage;