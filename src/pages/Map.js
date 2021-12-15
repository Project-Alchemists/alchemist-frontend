import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxGl from "!mapbox-gl";
import React, { useCallback, useEffect, useRef, useState } from "react";
import MapGL, { Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import axios from "axios";
import "./Map.css";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { BiLoader } from "react-icons/bi";
import { useToast } from "@chakra-ui/toast";
import { useSelector } from "react-redux";
import { initiateTransaction } from "web3Integration";

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
  const [placeArray, setPlaceArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imei, setImei] = useState("");
  const toast = useToast();
  const isWalletConnected = useSelector(
    state => state.globalState.isWalletConnected
  );

  const handleChange = event => setImei(event.target.value);

  const searchDevice = async () => {
    if (imei.length !== 15 || !imei.match("^[0-9]+$")) {
      toast({
        title: "Please enter valid IMEI number",
      });
      return;
    }
    setIsLoading(true);
    if (placeArray.length > 0) setPlaceArray([]);
    await axios
      .get(`https://alchemist-iotex.herokuapp.com/${imei}/10/0`)
      .then(res => {
        console.log(res.data.data);
        setPlaceArray(res.data.data);
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  };

  useEffect(() => {
    if (placeArray.length < 1) return;
    setViewport({
      zoom: 8,
      latitude:
        placeArray[0].latitude / Math.pow(10, 7) +
        (placeArray[0].latitude % Math.pow(10, 7)) * 0.0000001,
      longitude:
        placeArray[0].longitude / Math.pow(10, 7) +
        (placeArray[0].longitude % Math.pow(10, 7)) * 0.0000001,
    });
  }, [placeArray]);

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
    <div style={{ height: "65vh", width: "85vh", display: "flex" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {placeArray.map((place, index) => {
          var long =
            place.longitude / Math.pow(10, 7) +
            (place.longitude % Math.pow(10, 7)) * 0.0000001;
          var lat =
            place.latitude / Math.pow(10, 7) +
            (place.latitude % Math.pow(10, 7)) * 0.0000001;
          return (
            <Marker key={index} latitude={lat} longitude={long}>
              <div className="marker temporary-marker">
                <span></span>
              </div>
            </Marker>
          );
        })}
      </MapGL>
      <Box ml={8}>
        <Input
          placeholder="Enter device imei"
          value={imei}
          onChange={handleChange}
        ></Input>
        <Button mt={4} mr={2} ml={2} onClick={searchDevice}>
          Search Device
        </Button>
        <Button
          mt={4}
          onClick={() => {
            if (placeArray.length === 0) {
              toast({
                title:
                  "Unable to get location data, please make sure you have searched for the device",
              });
            }
            if (isLoading) {
              toast({
                title: "Loading...",
              });
              return;
            }
            if (!isWalletConnected) {
              toast({
                title: "Please connect your wallet first",
              });
              return;
            }

            initiateTransaction({ tokenId: 1 });
          }}
        >
          Mint NFT
        </Button>
      </Box>
      {isLoading && <Text ml={4}>Loading....</Text>}
    </div>
  );
};

// var map = new mapboxGl.Map({
//   container: "mapbox-map",
//   style: "mapbox://styles/mapbox/streets-v11",
// });

export default Map;
