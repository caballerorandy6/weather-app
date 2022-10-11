import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [result, setResult] = useState({});

  const { city, country } = currentWeather;

  const consultApi = async () => {
    const key = "62266c241e46e92d8e73f267f5fa849e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`;
    const reponse = await fetch(url);
    const result = await reponse.json();
    setResult(result.main);
    console.log(result.main);
  };

  useEffect(() => {
    consultApi();
  }, [currentWeather]);

  //useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <Form setCurrentWeather={setCurrentWeather} />
      <Result currentWeather={currentWeather} result={result} />
    </div>
  );
}

export default App;
