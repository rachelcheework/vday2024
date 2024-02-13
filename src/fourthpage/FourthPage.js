import React, {useState} from "react";
import { Link } from "react-router-dom";
import OptionsList from "../components/options/OptionsList";
import Snuggle from '../drawings/cozy_snuggle.jpg';
import Movie from '../drawings/cozy_movie.jpg';
import Read from '../drawings/cozy_read.jpg';
import Supper from '../drawings/cozy_supper.jpg';
import Wildcard from '../drawings/wildcard.jpg';

import '../cssfiles/common.css';

const FourthPage = ({setSelectedCozy, setSelectedCozyImage}) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (option) => {
        setSelectedOption(option[0]);
        setSelectedCozy(option[0]);
        setSelectedCozyImage(option[1]);
      };

    const CozyList = [
    ["snuggle",Snuggle],
    ["movie",Movie],
    ["read",Read],
    ["supper",Supper],
    ["wild card", Wildcard]
    ];

    return (
    <div className="main-wrapper">
        <div className="page-title">
            <h2>Amazing choice! Time to wind down...</h2>
            <h1>How would you like to be cozy?</h1>
        </div>
        
        <div className="options-list">
            <OptionsList options={CozyList} onSelect={handleSelect} />
        </div>
        <p>You have selected: <span className="selected-choice">{selectedOption}</span></p>

        <div className="nav-buttons">
            <Link to="/page3">
                <button>Go to Prev Page</button>
            </Link>

            <Link to="/summarypage">
                <button>Go to Next Page</button>
            </Link>
        </div>
    </div>
    );
};

export default FourthPage;