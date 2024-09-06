import { createAsyncThunk } from "@reduxjs/toolkit";
import constant from "../../constants/constants";
import axios from "axios";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const res = await axios.request(constant.options);

  const refined = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
  }));

  return refined;
});
