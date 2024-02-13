import React from "react";
import { Link } from "react-router-dom";
import '../cssfiles/common.css';
import './FirstPage.css';
import HammyFlower from '../drawings/hammy-flower.jpg'

const FirstPage = () => {
    const handleNo=()=>{
        alert('There must be an error... Please try again!');
    }

    return (
        <div className="main-wrapper">
            <div className="text">
                {/* <h1>Hi Owen!</h1> */}
                <h1 className='first-desc'>It's the month of love...</h1>
                <h1 className='first-desc'>So I was wondering if you would like to be my valentine?</h1>
            </div>
            <div className='first-img-container'>
                <img src={HammyFlower} alt='cat holding flowers'/>
                
            </div>
            <div className="yesno-container">
                <Link to="../page2">
                    <button>Yes!</button>
                </Link>
                <button onClick={handleNo}>No :(</button>
            </div>
        </div>
    );
};

export default FirstPage;