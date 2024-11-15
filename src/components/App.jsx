// import Nature from './Nature/Nature';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import Forecast from './Forecast/Forecast';
import Header from './Header/Header.jsx';
import Pets from './Pets/Pets';


export const App = () => {
  return (
    <>
      <Header />
      <WeatherInfo />
      <Forecast />
      <Pets/>
    </>
  );
};
