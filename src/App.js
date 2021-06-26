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

const useStyles = makeStyles({
  root: {
    background: "#90caf9",
    border: 0,
    borderRadius: 3,
    color: "#27313A",
    boxShadow: " -5px 3px 82px -6px rgba(	144, 202, 249,0.);",
  },
});

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 23, lng: 78.9629 });
  const [mapZoom, setMapZoom] = useState(4.2);

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
          title="Coronavirus Cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
        <Stats
          title="Coronavirus Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
        <Stats
          title="Coronavirus Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </div>
      <CasesMap center={mapCenter} zoom={mapZoom} />
      <div className="live">
        <Card className="live-card">
          <CardContent>
            <h3>Live Cases by Country</h3>
            <Table countries={tableData} />
          </CardContent>
        </Card>
        <Card className="live-graph">
          <CardContent>
            <LineGraph />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
