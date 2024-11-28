// import Nature from './Nature/Nature';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WeatherList from "./components/WeatherList/WeatherList";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherChart from "./components/WeatherChart/WeatherChart";
import Forecast from "./components/Forecast/Forecast";
import Pets from "./components/Pets/Pets";
import Nature from "./components/Nature/Nature";
import Footer from "./components/Footer/Footer";
import { WeatherContext, useWeather } from "./contexts/weatherContext";
import getWeather from "./utils/getWeather";
import { createContext, useEffect, useState } from "react";
import { useCallback } from "react";

export const App = () => {
  const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState({});
  const [isDetailed, setIsDetailed] = useState(false);
  const [details, setDetails] = useState({});
  // const contextValue = getWeather(location);
  console.log(weather);
  useEffect(() => {
    const getData = async () => {
      const data = await getWeather();
      setWeather(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const newWeather = await getWeather(location);
      setWeather(newWeather);
    };
    getData();
  }, [location]);

  const getDetails = useCallback(async (e) => {
    const currentElem = e.target.parentNode;
    const index = Array.from(e.target.parentNode.parentNode.children).findIndex(
      (elem) => elem === currentElem
    );
    const detailedWeather = weather.forecast.forecastday[index];
    setIsDetailed(true);
    setDetails(detailedWeather);
  });
  // setTimeout(() => {
  //   console.log(location)
  // }, 10000)

  return (
    <WeatherContext.Provider value={{ text: "hello00" }}>
      <Header />
      <Hero setLocation={setLocation} />
      <WeatherList weather={weather} setIsDetailed={getDetails} />
      {isDetailed && (
        <>
          <WeatherInfo data={details.day} exactData={details.hour[14]} />
          <WeatherChart chartDetails={details.hour} />
          <Forecast />
        </>
      )}
      <Pets />
      <Nature />
      <Footer></Footer>
    </WeatherContext.Provider>
  );
};
