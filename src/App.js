// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './firstpage/FirstPage';
import SecondPage from './secondpage/SecondPage';
import ThirdPage from './thirdpage/ThirdPage';
import FourthPage from './fourthpage/FourthPage';
import SummaryPage from './summarypage/SummaryPage';
import BackgroundMusic from './components/bgm/BackgroundMusic';

function App() {
  const [selectedFood, setSelectedFood] = useState('');
  const [selectedFoodImage, setSelectedFoodImage] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedActivityImage, setSelectedActivityImage] = useState('');
  const [selectedCozy, setSelectedCozy] = useState('');
  const [selectedCozyImage, setSelectedCozyImage] = useState('');

  return (
    //add basename in Router
    <Router> 
      <div className="app-container">
        <BackgroundMusic/>
        <Routes>
          <Route path="/" exact element={<FirstPage/>} />
          <Route path="/page2" element={<SecondPage setSelectedFood={setSelectedFood} setSelectedFoodImage={setSelectedFoodImage}/>} />
          <Route path="/page3" element={<ThirdPage setSelectedActivity={setSelectedActivity} setSelectedActivityImage={setSelectedActivityImage}/>} />
          <Route path="/page4" element={<FourthPage setSelectedCozy={setSelectedCozy} setSelectedCozyImage={setSelectedCozyImage}/>} />
          <Route path="/summarypage" element={<SummaryPage 
          selectedFood={selectedFood} selectedFoodImage={selectedFoodImage}
          selectedActivity={selectedActivity} selectedActivityImage={selectedActivityImage}
          selectedCozy={selectedCozy} selectedCozyImage={selectedCozyImage}
           />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
