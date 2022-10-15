import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import ErrorApi from "./components/ErrorApi";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [result, setResult] = useState({});
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(currentWeather).length > 0) {
      const apiConsult = async () => {
        setSpinner(true);
        setResult({});

        const { city, country } = currentWeather;
        const key = "798af9604d642d11ccb3f58b2648c0dd";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`;

        const response = await fetch(url);

        if (!response.ok) {
          setSpinner(false);

          const { status, statusText, url } = response;
          throw Error(`${status} ${statusText} in fetch ${url}`);
        }
        // } else {
        //   setError(false);
        // }

        console.log(response);
        const apiResult = await response.json();

        setResult(apiResult.main);

        setSpinner(false);
      };
      apiConsult().catch((error) => {
        console.log(error);
        setError(true);
      });
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [currentWeather]);

  return (
    <div>
      <Header />

      {error && (
        <ErrorApi>
          <p>The city and country do not match. Please check the fields!</p>
        </ErrorApi>
      )}

      <Form setCurrentWeather={setCurrentWeather} />
      {spinner && <Spinner />}
      {result.temp && (
        <Result result={result} currentWeather={currentWeather} />
      )}
    </div>
  );
}

export default App;
