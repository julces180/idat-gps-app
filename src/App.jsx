import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import {MapComponent} from './components/Map/MapComponent';

function App() {
  return (
    <div>
      <Sidebar />
      <MapComponent />
    </div>
  );
}

export default App;