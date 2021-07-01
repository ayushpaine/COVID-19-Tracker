import React from "react";
import { MapContainer, TileLayer, useMap, setView } from "react-leaflet";
import "./CasesMap.css";
import { mapCircles } from "./mapCircles";

function ChangeView({ center, zoom, countries, caseType }) {
  const map = useMap();
  map.setView(center, zoom);
  return 0;
}
function CasesMap({ center, zoom, countries, caseType }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapCircles(countries, caseType)}
      </MapContainer>
    </div>
  );
}

export default CasesMap;
