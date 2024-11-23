import axios from 'axios';

const getWeather = async (city = 'London', days = '3') => {
  const data = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=b45feb12d0584be5922204733241511&q=${city}&days=${days}&aqi=no&alerts=no`
  );
//   console.log(data);
  return data.data
};

export default getWeather;
