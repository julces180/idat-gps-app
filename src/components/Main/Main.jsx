import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {MapComponent} from '../MapComponent/MapComponent';
import './main.css';

const Main = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
};

export default Main;