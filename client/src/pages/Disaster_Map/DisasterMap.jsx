import 'ol/ol.css';
import { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import { Tile, Vector as VectorLayer } from 'ol/layer';
import { XYZ, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import axios from 'axios';

import earthquakeIcon from '../../assets/earthquake.png';
import hurricaneIcon from '../../assets/hurricane.png';
import fireIcon from '../../assets/flame.png';
import volcanicEruptionIcon from '../../assets/volcano.png';
import floodIcon from '../../assets/tsunami.png';
import tornadoIcon from '../../assets/tornado.png';

const DisasterMap = () => {
  const mapRef = useRef();
  const [mapObj, setMapObj] = useState(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Function to get marker style based on disaster type
    const getMarkerStyle = (disasterType) => {
      let iconSrc;
      switch (disasterType) {
        case 'earthquake':
          iconSrc = earthquakeIcon;
          break;
        case 'hurricane':
          iconSrc = hurricaneIcon;
          break;
        case 'tornado':
          iconSrc = tornadoIcon;
           break;
        case 'flood':
            iconSrc = floodIcon;
            break;
        case 'wildfire':
          iconSrc = fireIcon;
          break;
        case 'volcanic eruption':
          iconSrc = volcanicEruptionIcon;
          break;
        default:
          iconSrc = fireIcon;
      }

      return new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: iconSrc,
        }),
      });
    };

    // Create a vector source for markers
    const vectorSource = new VectorSource();

    // Create vector layer
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Initialize the map
    const map = new Map({
      view: new View({
        center: [-11000000, 4600000],
        zoom: 2,
      }),
      layers: [
        new Tile({
          source: new XYZ({
            url: "https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
            crossOrigin: 'anonymous'
          }),
        }),
        vectorLayer, 
      ],
      target: mapRef.current,
    });

   
    setMapObj(map);

    
    axios.get('http://127.0.0.1:5050/api/v1/disaster')
      .then(response => {
        const newMarkers = response.data.disasters; 
        console.log(newMarkers);
        
        newMarkers.forEach(marker => {
          const feature = new Feature({
            geometry: new Point(fromLonLat([marker.coordinates.lon, marker.coordinates.lat])),
            name: marker.title,
          });
          feature.setStyle(getMarkerStyle(marker.eventType));
          vectorSource.addFeature(feature);
        });
      })
      .catch(error => {
        console.error('Error fetching marker data:', error);
      });

    map.on('click', (evt) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel,
        (feature) => {
          return feature;
        });

      if (feature) {
        alert(feature.get('name'));
      }
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div className="map" ref={mapRef} />;
};

export default DisasterMap;
