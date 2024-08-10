// MapSelector.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom hook to update map view
const MapViewUpdater = ({ position }) => {
  const map = useMap();
  if (position) {
    map.setView([position.lat, position.lng], 13); // Adjust zoom level as needed
  }
  return null;
};

const MapClickHandler = ({ onClick }) => {
  useMapEvents({
    click(event) {
      onClick(event.latlng);
    },
  });
  return null;
};

const MapSelector = () => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleMapClick = (latlng) => {
    setPosition(latlng);
    setAddress(''); // Clear the search bar when clicking on the map
  };

  const handleSearch = async () => {
    if (address) {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search`,
          {
            params: {
              q: address,
              format: 'json',
              limit: 1,
            },
          }
        );
        const data = response.data[0];
        if (data) {
          const { lat, lon } = data;
          const newPosition = { lat: parseFloat(lat), lng: parseFloat(lon) };
          setPosition(newPosition);
        } else {
          setError('Location not found');
        }
      } catch (err) {
        setError('Error fetching location');
      }
    }
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler onClick={handleMapClick} />
        <MapViewUpdater position={position} />
        {position && (
          <Marker position={position}>
            <Popup>
              Latitude: {position.lat.toFixed(5)}, Longitude: {position.lng.toFixed(5)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Search for a location"
        />
        <button onClick={handleSearch}>Search</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <h2>Selected Coordinates:</h2>
        <p>Latitude: {position ? position.lat.toFixed(5) : 'N/A'}</p>
        <p>Longitude: {position ? position.lng.toFixed(5) : 'N/A'}</p>
      </div>
    </div>
  );
};

export default MapSelector;
