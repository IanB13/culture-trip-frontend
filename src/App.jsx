/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Map from './components/map/Map'; 
import InfoModal from './components/modals/InfoModal'
import Instructions from './components/modals/Instructions'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div className="App">
      <Map />
{/*       <Instructions />
      <InfoModal x={12} y={12} /> */}
    </div>
  );
}

export default App;
