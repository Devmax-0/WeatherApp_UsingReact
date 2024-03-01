import { useWeather } from "../Context/Weather";

const Card = () => {
  const weather = useWeather();
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-bold">{weather?.data?.main?.temp} °C</h1>
      <h5 className="text-xl">
        {weather?.data?.name}, {weather?.data?.sys?.country}
      </h5>
    </div>
  );
};

export default Card;
