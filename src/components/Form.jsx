import React, { useState, useEffect } from "react";
import Error from "./Error";
import useCountries from "../hooks/useCountries";
import { countries } from "../data/countries";

const Form = ({ setCurrentWeather }) => {
  const [city, setCity] = useState("");
  const [country, Countries] = useCountries("Country", countries);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([city, country].includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);

      return;
    }
    //setError(false);
    setCurrentWeather({ city, country });
    setCity("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl text-center text-white mb-10">
        Add the city, the country and the result will be displayed here.
      </h1>

      <form onSubmit={handleSubmit} className="sm:w-1/4">
        <div>
          <label htmlFor="city" className="text-white font-bold block mb-2">
            City
          </label>

          <input
            value={city}
            id="city"
            type="text"
            className="text-center w-full p-1 rounded hover:bg-gray-100 focus:outline-none focus:border-gray-600 italic mb-4"
            placeholder="City ..."
            onChange={(e) => setCity(e.target.value)}
          />

          <Countries />

          {error && (
            <Error>
              <p>All Field are required!</p>
            </Error>
          )}

          <input
            type="submit"
            className="w-full bg-yellow-500 p-1 mb-10 font-bold uppercase hover:bg-yellow-400 transition-colors cursor-pointer active:bg-yellow-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
