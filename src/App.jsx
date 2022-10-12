import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [result, setResult] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (Object.keys(currentWeather).length > 0) {
      const apiConsult = async () => {
        setSpinner(true);
        setResult({});
        const { city, country } = currentWeather;
        const key = "798af9604d642d11ccb3f58b2648c0dd";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`;
        const response = await fetch(url);
        const apiResult = await response.json();

        setResult(apiResult.main);

        setSpinner(false);
      };
      apiConsult();
    }
  }, [currentWeather]);

  const ApiConsult = async () => {
    const response = await fetch(url);
    const resultApi = await response.json();
    console.log(resultApi);
    return resultApi;
  };

  return (
    <div>
      <Header />
      <Form setCurrentWeather={setCurrentWeather} />
      {spinner && <Spinner />}
      {result.temp && (
        <Result result={result} currentWeather={currentWeather} />
      )}
    </div>
  );
}

export default App;
