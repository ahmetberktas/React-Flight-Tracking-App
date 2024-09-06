import { createAsyncThunk } from "@reduxjs/toolkit";
import options from "../../constants/constants";
import axios from "axios";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const res = await axios.request(options);

  const refined = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
  }));

  return refined;
});
