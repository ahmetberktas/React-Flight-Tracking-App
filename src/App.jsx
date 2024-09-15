import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ListView from "./pages/ListView";
import MapView from "./pages/MapView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import DetailModal from "./components/DetailModal";

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  /* Sayfa Yüklendiğinde Çalışır */
  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);

  /* Yenile Buttonuna Click olduğunda çalışır */
  const refreshFlights = () => {
    dispatch(getFlights());
  };

  const openModal = (id) => {
    setDetailId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDetailId(null);
  };

  return (
    <>
      <Header refreshFlights={refreshFlights} />
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
      {isMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}
      {isModalOpen && (
        <DetailModal closeModal={closeModal} detailId={detailId}></DetailModal>
      )}
    </>
  );
};

export default App;
