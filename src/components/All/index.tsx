import {All} from "@components/All/All";
import React from "react";
import {SortType} from "./SortButton";
const countryByName = require("../../../country-json/src/country-by-name.json");
const populationByCountry = require("../../../country-json/src/country-by-population.json");
const populationByArea = require("../../../country-json/src/country-by-surface-area.json");

export default (): JSX.Element => {
  const [currentSort, setCurrentSort] = React.useState<SortType>();
  const [sortAsc, toggleSortAsc] = React.useState<boolean>(true);

  const handleSortUpdate = (newType: SortType) => {
    if (newType === currentSort) {
      toggleSortAsc(!sortAsc);
    }
    setCurrentSort(newType);
  };

  return (
    <All currentSort={currentSort} sortAsc={sortAsc} countries={countryByName} setCurrentSort={handleSortUpdate}  population={populationByCountry} area={populationByArea}/>
  );
};
