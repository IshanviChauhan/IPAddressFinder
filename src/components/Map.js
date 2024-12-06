import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({ lat, lon }) => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    if (lat && lon) {
      setViewport((v) => ({
        ...v,
        latitude: lat,
        longitude: lon,
      }));
    }
  }, [lat, lon]);

  return (
    <ReactMapGL
      {...viewport}
      mapboxAccessToken="<YOUR API KEY>"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(newViewport) => setViewport(newViewport)}
    />
  );
};

export default Map;
