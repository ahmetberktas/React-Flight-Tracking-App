import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <Header />
      <div className="buttons-container">
        <button
          className={`view-button ${isMapView ? "active" : ""}`}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={`view-button ${!isMapView ? "active" : ""}`}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {isMapView ? <MapView /> : <ListView />}
    </>
  );
};

export default App;
