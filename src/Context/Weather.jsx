import { createContext, useContext, useState } from "react";
import { getWeatherData, getDataForCurrentLocation } from "../API";

export const weatherContext = createContext();

export const useWeather = () => {
  return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherData(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getDataForCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => {
        setData(data);
      });
    });
  };

  return (
    <weatherContext.Provider
      value={{
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocation,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
