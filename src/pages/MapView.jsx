import React from "react";
import { useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const planeIcon = new L.Icon({
  iconUrl: "/plane-icon.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

const MapView = ({ openModal }) => {
  const state = useSelector((store) => store.flight);

  return (
    <MapContainer
      center={[39.9334, 32.8597]}
      zoom={6}
      scrollWheelZoom={true}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {state.flights.map((flight) => (
        <Marker
          position={[flight.lat, flight.lng]}
          key={flight.id}
          icon={planeIcon}
        >
          <Popup className="custom-popup">
            <div className="popup">
              <span className="flight-code">Uçuş Kodu: {flight.code}</span>
              <button
                onClick={() => openModal(flight.id)}
                className="details-button"
              >
                Detay Gör
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={state.path} />
    </MapContainer>
  );
};

export default MapView;
