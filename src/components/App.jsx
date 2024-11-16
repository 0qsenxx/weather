// import Nature from './Nature/Nature';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import WeatherList from './WeatherList/WeatherList';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import WeatherChart from './WeatherChart/WeatherChart';
export const App = () => {
  return (
    <>
      <WeatherInfo />
      <WeatherChart />
      {/* <Header />
      <Hero />
      <WeatherList /> */}
    </>
  );
};
