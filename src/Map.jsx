// src/Map.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Estilos de mapa, los puedes agregar directamente
const containerStyle = {
  width: '100%',
  height: '500px',
};

// Coordenadas iniciales
const center = {
  lat: -34.5956145,
  lng: -58.4431949,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
