import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAOS_API_KEY,
  });
  if (!isLoaded) return <div>Loading....</div>;
  return <Map />;
  return <div></div>;
}

export default Map;
