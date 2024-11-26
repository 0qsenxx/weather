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

export const App = () => {
  const [location, setLocation] = useState('London');
  const [weather, setWeather] = useState({});
  const [isDetailed, setIsDetailed] = useState(false);
  // const contextValue = getWeather(location);

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

  // setTimeout(() => {
  //   console.log(location)
  // }, 10000)

  return (
    <WeatherContext.Provider value={{ text: 'hello00' }}>
      <Header />
      <Hero setLocation={setLocation} />
      <WeatherList weather={weather} setIsDetailed={setIsDetailed} />
      {isDetailed && (
        <>
          <WeatherInfo />
          <WeatherChart />
          <Forecast />
        </>
      )}
      <Pets />
      <Nature />
      <Footer/>
    </WeatherContext.Provider>
  );
};
