import SearchBar from "./Components/SearchBar";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { useWeather } from "./Context/Weather";
import { useEffect } from "react";

const App = () => {
  const weather = useWeather();

  useEffect(() => {
    //Get Current Location
    weather.fetchCurrentUserLocation();
  }, []);

  return (
    <div className="h-screen w-full bg-slate-900 flex flex-col gap-10 justify-center items-center">
      <h1 className="text-4xl font-bold text-white">Weather Forcast</h1>
      <div className="container w-[400px] h-[400px] flex flex-col gap-5 justify-evenly items-center rounded-lg">
        <div className="flex ">
          <SearchBar />
          <Button value="Search" onClick={weather.fetchData} />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default App;
