import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Fix broken default marker icons when bundled with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const DEFAULT_CENTER: [number, number] = [20, 0];
const DEFAULT_ZOOM = 2;

const MARKERS: { position: [number, number]; label: string }[] = [
  { position: [51.505, -0.09],    label: 'Example vessel — London' },
  // Seoul area
  { position: [37.5665, 126.978], label: 'Vessel — Seoul Port' },
  { position: [37.45,   126.82],  label: 'Vessel — Incheon' },
  { position: [37.68,   127.1],   label: 'Vessel — Han River East' },
  // Kyoto area
  { position: [35.0116, 135.768], label: 'Vessel — Kyoto' },
  { position: [34.69,   135.195], label: 'Vessel — Osaka Bay' },
  { position: [35.18,   136.1],   label: 'Vessel — Lake Biwa' },
];

const Map: React.FC = () => {
  return (
    <MapContainer
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      className='h-[calc(100vh-9rem)] w-full rounded-lg'
      worldCopyJump
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {MARKERS.map((m) => (
        <Marker key={m.label} position={m.position}>
          <Popup>{m.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
