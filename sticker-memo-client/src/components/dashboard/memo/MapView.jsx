/*global naver*/  
import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import Color from '../../../utilities/color';
import Marker from '../../../utilities/marker';

const style = {
    wrapper: {
        width: "50%", 
        height: `calc(100%)`, 

        borderStyle: "solid", 
        borderWidth: "0px 0px 0px 1px", 
        borderColor: Color.hintColor, 
    },

    map: {
        width: "100%", 
        height: "100%", 
    }
}

const INITIAL_TRAFFIC_MAP_OPTION = {
    center: new naver.maps.LatLng(37, 127), 
    zoom: 8, 
};

let mapContainer;

const MapView = (props) => {
    const showMarkersRef = useRef();

    useEffect(() => {
        mapContainer = new naver.maps.Map("mapContainer", INITIAL_TRAFFIC_MAP_OPTION);
        naver.maps.Event.addListener(mapContainer, "click", (event) => handleMapClick(event));
        showMarkersRef.current = [];
    }, []);

    const handleMapClick = (event) => {
        const marker = new naver.maps.Marker({
            position: event.coord, 
            map: mapContainer
        });
        naver.maps.Event.addListener(marker, "click", (event) => {
            showMarkersRef.current = showMarkersRef.current.filter((m) => m !== marker);
            props.setMarkers(showMarkersRef.current.slice());
            marker.setMap(null);
        });
        showMarkersRef.current.push(marker);
        props.setMarkers(showMarkersRef.current.slice());
    }

    return (
        <div style={style.wrapper}>
            <div style={style.map} id="mapContainer"></div>
        </div>
    );
};

export default MapView;