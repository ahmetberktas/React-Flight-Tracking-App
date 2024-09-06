import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store.flight);
  return (
    <header className="header">
      <div className="header-left">
        <img src="./flightlogo.png" className="logo"></img>
        <h1>Flight Tracking</h1>
      </div>
      <div className="header-right">
        <button className="disabled-button" disabled>
          {state.isLoading
            ? "Uçuşlar Hesaplanıyor"
            : state.isError
            ? "Uçuşlar Hesaplanamadı"
            : state.flights.length + " Uçuş Bulundu"}
        </button>
      </div>
    </header>
  );
};

export default Header;
