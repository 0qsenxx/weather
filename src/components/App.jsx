// import Nature from './Nature/Nature';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import WeatherList from './WeatherList/WeatherList';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import WeatherChart from './WeatherChart/WeatherChart';
import Forecast from './Forecast/Forecast';
import Pets from './Pets/Pets';
import Nature from './Nature/Nature';
import Footer from './Footer/Footer';
import { WeatherContext, useWeather } from 'contexts/weatherContext';
import getWeather from 'utils/getWeather';
import { createContext, useEffect, useState } from 'react';
import { useCallback } from 'react';

export const App = () => {
  const [location, setLocation] = useState('London');
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

  const getDetails = useCallback(async e => {
    const currentElem = e.target.parentNode;
    const index = Array.from(e.target.parentNode.parentNode.children).findIndex(
      elem => elem === currentElem
    );
    const detailedWeather = weather.forecast.forecastday[index];
    setIsDetailed(true);
    setDetails(detailedWeather);
  });
  // setTimeout(() => {
  //   console.log(location)
  // }, 10000)

  return (
    <WeatherContext.Provider value={{ text: 'hello00' }}>
      <Header />
      <Hero setLocation={setLocation} />
      <WeatherList weather={weather} setIsDetailed={getDetails} />
      {isDetailed && (
        <>
          <WeatherInfo data={details.day} exactData={details.hour[14]} />
          <WeatherChart chartDetails={details.hour} />
          <Forecast location={location} />
        </>
      )}
      <Pets />
      <Nature />
      <Footer></Footer>
    </WeatherContext.Provider>
  );
};
