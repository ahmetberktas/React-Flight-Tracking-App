const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.596201",
    bl_lng: "25.826312",
    tr_lat: "43.693244",
    tr_lng: "44.822849",
    limit: "300",
  },
  headers: {
    "x-rapidapi-key": "a065931112mshade584e262c4e55p1d526bjsn1efa31a216d9",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

const optionsTwo = {
  headers: {
    "x-rapidapi-key": "a065931112mshade584e262c4e55p1d526bjsn1efa31a216d9",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
};

export default { options, optionsTwo };
