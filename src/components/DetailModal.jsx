import axios from "axios";
import React, { useEffect, useState } from "react";
import constant from "../constants/constants";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";

const DetailModal = ({ closeModal, detailId }) => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        constant.optionsTwo
      )
      .then((res) => {
        setDetail(res.data);
        dispatch(setPath(res.data.trail));
      })
      .catch((err) => console.log(err));
  }, [detailId]);

  const formatTime = (timestamp) => {
    if (!timestamp) return "Veri Yok";
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatFlightTime = (seconds) => {
    if (!seconds) return "Veri Yok";
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} saat ${minutes} dakika`;
  };

  return (
    <div className="detail-modal">
      <div className="modal-header">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
      </div>
      <div className="modal-content">
        {!detail ? (
          <Loader />
        ) : (
          <>
            <img
              src={detail?.aircraft?.images?.large?.[0]?.src || "Veri Yok"}
              alt="Uçak resmi"
              className="plane-image"
            />
            <h2>{detail?.aircraft?.model?.text || "Veri Yok"}</h2>
            <p>
              <strong>Uçak Kodu:</strong>{" "}
              {detail?.aircraft?.model?.code || "Veri Yok"}
            </p>
            <p>
              <strong>Kuyruk Kodu:</strong>{" "}
              {detail?.aircraft?.registration || "Veri Yok"}
            </p>
            <p>
              <strong>Hava Yolu Şirketi:</strong>{" "}
              {detail?.airline?.short || "Veri Yok"}
            </p>
            <p>
              <strong>Kalkış Yeri:</strong>{" "}
              {detail?.airport?.origin?.name ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={detail?.airport?.origin?.website}
                >
                  {detail?.airport?.origin?.name}
                </a>
              ) : (
                "Veri Yok"
              )}
            </p>
            <p>
              <strong>İniş Yeri:</strong>{" "}
              {detail?.airport?.destination?.name ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={detail?.airport?.destination?.website}
                >
                  {detail?.airport?.destination?.name}
                </a>
              ) : (
                "Veri Yok"
              )}
            </p>
            <p>
              <strong>Kalkış Saati:</strong>{" "}
              {formatTime(detail?.time?.scheduled?.departure)}
            </p>
            <p>
              <strong>Tahmini İniş Saati (ETA):</strong>{" "}
              {formatTime(detail?.time?.other?.eta)}
            </p>
            <p>
              <strong>Uçuş Süresi:</strong>{" "}
              {formatFlightTime(detail?.time?.historical?.flighttime)}
            </p>
            <p>
              <strong>Durum:</strong> {detail?.status?.text || "Veri Yok"}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
