import { useWeather } from "../Context/Weather";

const SearchBar = (props) => {
  const weather = useWeather();
  return (
    <div>
      <input
        className="w-[250px] py-[10px] px-[20px] rounded-lg me-1"
        type="text"
        placeholder="Search here..."
        value={weather.searchCity}
        onChange={(e) => {
          weather.setSearchCity(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
