import React, { useState, useEffect } from "react";
import "./App.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Layout from "./component/Layout";
import DataTable from "./component/DataTable";

const App: React.FC = () => {
  const [values, setValues] = useState([]);
  const [carData, setCarData] = useState([]);
  const [carFilter, setCarFilter] = useState<string[]>([]);

  useEffect(() => {
    const url = "http://localhost:5000/api/cars";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(cars => {
        setValues(cars);
      });
  }, []);

  useEffect(() => {
    var filterCarsData: any = [];
    if (carFilter.length) {
      values.map((item: any) => {
        let find: any = [];
        carFilter.map((filter: any) => {
          if (item[filter]) find.push(true);
          else find.push(false);
        });
        if (!find.includes(false)) filterCarsData.push(item);
      });
    } else {
      filterCarsData = [...values];
    }

    setCarData(filterCarsData);
  }, [values, carFilter]);

  const handleClick = (name: string) => (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    let newFilter: any = [...carFilter];
    if (newFilter.includes(name)) newFilter.splice(newFilter.indexOf(name), 1);
    else newFilter.push(name);
    setCarFilter(newFilter);
  };
  const carChecks = [
    { name: "Sun Roof", value: "hasSunroof" },
    { name: "Four Wheeler", value: "isFourWheelDrive" },
    { name: "Low Miles", value: "hasLowMiles" },
    { name: "Power Windows", value: "hasPowerWindows" },
    { name: "Navigation", value: "hasNavigation" },
    { name: "Heated Seats", value: "hasHeatedSeats" }
  ];

  return (
    <div className="container">
      <Layout />
      <br />
      <div className="car-filter">
        {carChecks.map((check: any, index: any) => (
          <FormControlLabel
            value={check.value}
            control={
              <Checkbox
                checked={carFilter.includes(check.value)}
                onChange={handleClick(check.value)}
                value={check.value}
                color="primary"
              />
            }
            key={index}
            label={check.name}
            labelPlacement="end"
          />
        ))}
      </div>
      <br />
      <DataTable carData={carData} />
    </div>
  );
};

export default App;
