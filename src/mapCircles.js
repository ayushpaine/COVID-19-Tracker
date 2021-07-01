import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import "./mapCircles.css";
import "leaflet/dist/leaflet.css";

const caseTypeColors = {
  cases: {
    rgb: "rgb(102, 102, 102)",
    half_op: "rgb(102, 102, 102,0.5)",
    multiplier: 300,
  },
  recovered: {
    rgb: "rgba(65, 199, 65,0.7)",
    half_op: "rgba(65, 199, 65,1)",
    multiplier: 400,
  },
  deaths: {
    rgb: "rgb(255, 60, 60)",
    half_op: "rgb(255, 60, 60,0.5)",
    multiplier: 1000,
  },
};

export const mapCircles = (data, caseType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      pathOptions={{
        color: `${caseTypeColors[caseType].half_op}`,
        fillColor: `${caseTypeColors[caseType].rgb}`,
      }}
      radius={
        Math.sqrt(country[caseType]) * caseTypeColors[caseType].multiplier
      }
    >
      <Popup minWidth="auto">
        <div className="popup-container">
          <div className="flag-container">
            <img src={`${country.countryInfo.flag}`} />
          </div>
          <div className="stats-container">
            <div className="map-name">{country.country}</div>
            <div className="map-cases">
              Cases:
              <div style={{ color: `gray` }}>
                {numeral(country.cases).format("0,0")}
              </div>
            </div>
            <div className="map-recovered">
              Recovered:
              <div style={{ color: `green ` }}>
                {numeral(country.recovered).format("0,0")}
              </div>
            </div>
            <div className="map-deaths">
              Deaths:
              <div style={{ color: `red` }}>
                {numeral(country.deaths).format("0,0")}
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </Circle>
  ));
