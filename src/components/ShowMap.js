import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './ShowMap.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1dGVmb3JjZSIsImEiOiJja3Zyam00Z3EwM3RlMnVrM2syNmYydGR6In0.Dnqf-EMkbzvfkmDPgXXuSw';

const ShowMap = (props) => {


  const [lng, setLng] = useState(props.lon);
    const [lat, setLat] = useState(props.lat);
    const [zoom, setZoom] = useState(10.00);
   
    

    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        setLat(props.lat);
        setLng(props.lon);
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        })
        
        //buildMaps();
    }, [props.lat, props.lon]);



    return (
        <div>
           <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default ShowMap;