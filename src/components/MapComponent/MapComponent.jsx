import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './MapComponent.module.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export const MapComponent = () => {
  const position = [-12.157033, -76.980799]; // Coordenadas iniciales

  return (
    <div className="map-wrapper">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }} // Ajusta el estilo aquí
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Bienvenido a Idat GPS! <br /> Aquí estamos.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
