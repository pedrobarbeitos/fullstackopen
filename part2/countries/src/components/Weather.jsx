import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const Weather = ({ searchedCountries }) => {
  return (
    <div>
      <h2>Weather in {searchedCountries[0].capital[0]} </h2>
      <p>hi hi</p>
    </div>
  );
};
