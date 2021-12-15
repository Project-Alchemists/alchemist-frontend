import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxGl from "!mapbox-gl";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

var MAPBOX_TOKEN =
  "pk.eyJ1Ijoicml0dmlqMTQiLCJhIjoiY2t4NzVsem5mMDM0cjMxcWN0d2RnbTZsNCJ9.MmqQnU6jnFaF1mv5rCk-oA";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    newViewport => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    newViewport => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <div style={{ height: "100vh", width: "100vh" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
    </div>
  );
};

// var map = new mapboxGl.Map({
//   container: "mapbox-map",
//   style: "mapbox://styles/mapbox/streets-v11",
// });

export default Map;
