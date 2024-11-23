// import Nature from './Nature/Nature';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import WeatherList from './WeatherList/WeatherList';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import WeatherChart from './WeatherChart/WeatherChart';
import Forecast from './Forecast/Forecast';
import Pets from './Pets/Pets';
import Nature from './Nature/Nature';
import { WeatherContext, useWeather } from 'contexts/weatherContext';
import getWeather from 'utils/getWeather';
import { createContext, useEffect, useState } from 'react';

export const App = () => {
  const [location, setLocation] = useState('London');
  const contextValue = getWeather(location);

  // useEffect(() => {
  //   const contextValue = getWeather(location)
  // }, [location]);

  // setTimeout(() => {
  //   console.log(location)
  // }, 10000)

  return (
    <WeatherContext.Provider value={contextValue}>
      <Header />
      <Forecast />
      <Hero setLocation={setLocation} />
      <WeatherList />
      <Pets />
      <Nature />
      {/* <Forecast /> */}
    </WeatherContext.Provider>
  );
};
