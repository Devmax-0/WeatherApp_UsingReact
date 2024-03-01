export const getWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b8a095ce896dd84f7fb1004a598c8919`
  );

  return response.json();
};

export const getDataForCurrentLocation = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b8a095ce896dd84f7fb1004a598c8919`
  );
  return response.json();
};
