import React, {useState} from "react";
import { Link } from "react-router-dom";
import OptionsList from "../components/options/OptionsList";
import Bowling from '../drawings/activity_bowling.jpg';
import Hike from '../drawings/activity_hike.jpg';
import Museum from '../drawings/activity_museum.jpg';
import Paint from '../drawings/activity_paint.jpg';
import Wildcard from '../drawings/wildcard.jpg';

import '../cssfiles/common.css';

const ThirdPage = ({setSelectedActivity, setSelectedActivityImage}) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (option) => {
        setSelectedOption(option[0]);
        setSelectedActivity(option[0]);
        setSelectedActivityImage(option[1]);
      };

    const ActivityList = [
    ["bowling",Bowling],
    ["hike",Hike],
    ["museum", Museum],
    ["paint",Paint],
    ["wild card", Wildcard]
    ];

    return (
    <div className="main-wrapper">
        <div className="page-title">
            <h2>Okay! That sounds amazing!</h2>
            <h1>What would you like to do next?</h1>
        </div>
        
        <div className="options-list">
            <OptionsList options={ActivityList} onSelect={handleSelect} />
        </div>
        <p>You have selected: <span className="selected-choice">{selectedOption}</span></p>

        <div className="nav-buttons">
            <Link to="/page2">
                <button>Go to Prev Page</button>
            </Link>

            <Link to="/page4">
                <button>Go to Next Page</button>
            </Link>
        </div>
    </div>
    );
};

export default ThirdPage;