import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
  TextField,
} from "@material-ui/core";
import Stats from "./Stats";
import CasesMap from "./CasesMap";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table";
import { sortData } from "./sort";
import LineGraph from "./Graph";
import "leaflet/dist/leaflet.css";
import { statStyle } from "./statStyle";

const useStyles = makeStyles({
  root: {
    background: "#90caf9",
    border: 0,
    borderRadius: 3,
    color: "#27313A",
    height: 80,
    width: 280,
    borderRadius: 6,
    boxShadow: " -5px 3px 82px -6px rgba(	144, 202, 249,0.2);",
  },
});

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [mapCountries, setMapCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 40.3, lng: 10 });
  const [mapZoom, setMapZoom] = useState(2.4);
  const [caseType, setCaseType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((resp) => resp.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          let sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(5);
      });
  };

  const classes = useStyles();

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: "#90caf9" }} s>
            COVID-19 Tracker
          </h1>
          <FormControl className="App-dropdown">
            <TextField
              select
              label="Select"
              variant="filled"
              onChange={onCountryChange}
              className={classes.root}
              helperText="Select Your Country"
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </TextField>
          </FormControl>
        </header>
      </div>
      <div className="stats">
        <Stats
          isGrey
          active={caseType === "cases"}
          onClick={(e) => setCaseType("cases")}
          title="Coronavirus Cases"
          cases={statStyle(countryInfo.todayCases)}
          total={statStyle(countryInfo.cases)}
        />
        <Stats
          isGreen
          active={caseType === "recovered"}
          onClick={(e) => setCaseType("recovered")}
          title="Coronavirus Recovered"
          cases={statStyle(countryInfo.todayRecovered)}
          total={statStyle(countryInfo.recovered)}
        />
        <Stats
          isRed
          active={caseType === "deaths"}
          onClick={(e) => setCaseType("deaths")}
          title="Coronavirus Deaths"
          cases={statStyle(countryInfo.todayDeaths)}
          total={statStyle(countryInfo.deaths)}
        />
      </div>
      <CasesMap
        center={mapCenter}
        zoom={mapZoom}
        countries={mapCountries}
        caseType={caseType}
      />
      <div className="live">
        <Card className="live-card">
          <CardContent>
            <h3>Live Cases by Country</h3>
            <Table countries={tableData} />
          </CardContent>
        </Card>
        <div className="container">
          <div className="card-info">
            <h3 style={{ textTransform: `capitalize` }}>
              Worldwide New {caseType}
            </h3>

            <LineGraph className="graph-fill" casesType={caseType} />
            <br />
            <br />
          </div>
        </div>
        <div>
          <br />
        </div>
      </div>
    </>
  );
}

export default App;
