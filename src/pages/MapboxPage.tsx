import React from 'react';
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string;

const MapboxPage: React.FC = () => {
  return (
    <Map
      initialViewState={{
        longitude: 0,
        latitude: 20,
        zoom: 2,
      }}
      style={{ width: '100%', height: 'calc(100vh - 9rem)', borderRadius: '0.5rem' }}
      mapStyle='mapbox://styles/mapbox/dark-v11'
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
};

export default MapboxPage;
