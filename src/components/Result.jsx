import React from "react";

const Result = ({ currentWeather, result }) => {
  const { city, country } = currentWeather;
  // console.log(city, country);

  const { temp, temp_min, temp_max } = result;
  //console.log(temp, temp_min, temp_max);

  const kelvinToFahrenheit = (k) => {
    return ((k - 273.15) * 1.8 + 32).toFixed(0);
  };

  return (
    <div className="flex flex-col justify-start items-center p-10">
      <div>
        <h1 className="text-white text-3xl mb-4">
          {city},{" "}
          <span className="text-yellow-500 uppercase font-bold">{country}</span>
        </h1>
      </div>
      <div>
        <p className="text-white text-xl font-bold">
          Temperature:{" "}
          <span className="font-normal text-yellow-300">{` ${kelvinToFahrenheit(
            temp
          )} fahrenheit degrees`}</span>{" "}
        </p>
        <p className="text-white text-xl font-bold">
          Min Temperature:{" "}
          <span className="font-normal text-yellow-300">{` ${kelvinToFahrenheit(
            temp_min
          )} fahrenheit degrees`}</span>{" "}
        </p>
        <p className="text-white text-xl font-bold">
          Max Temperature:{" "}
          <span className="font-normal text-yellow-300">{` ${kelvinToFahrenheit(
            temp_max
          )} fahrenheit degrees`}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Result;
