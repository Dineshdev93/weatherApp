import { useEffect, useState } from "react";
import Highlights from "./components/Highlights";
import Temperature from "./components/Temperature";
import axios from "axios";
function App() {
  const [weatherdata, setWeatherData] = useState([]);
  const [city, setCity] = useState("Jaipur");
  // const getapi = () => {
  //   const api = `http://api.weatherapi.com/v1/current.json?key=86765e6ed1254bf3afa132309240202&q=${city}&aqi=no`
  //      fetch(api)
  //     .then((response)=>{
  //       if (!response.ok) {
  //         throw new Error("Could not get data");
  //       }
  //         return response.json()
  //     })
  //     .then((data)=>{
  //       setWeatherData([data])
  //     }).catch((e)=>{
  //       console.log(`error ${e}`);
  //     })
  // }
  const getapi = async () => {
    const api = `http://api.weatherapi.com/v1/current.json?key=86765e6ed1254bf3afa132309240202&q=${city}&aqi=no`;
    try {
      const result = await axios.get(api);
      setWeatherData([result.data]);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(weatherdata);
  useEffect(() => {
    getapi();
  }, [city]);

  return (
    <div className="bg-gray-900 h-screen  flex justify-center align-top gap-20">
      <div className=" w-1/4  mt-28">
        {weatherdata &&
          weatherdata.map((item, index) => (
            <Temperature item={item} key={index} setCity={setCity} />
          ))}
      </div>
      <div className=" w-1/3   mt-36 ml-3">
        {weatherdata.length > 0 ? (
          weatherdata.map((item, index) => (
            <Highlights data={item} key={index} />
          ))
        ) : (
          <span className="text-white text-4xl">Loadinng...</span>
        )}
      </div>
    </div>
  );
}

export default App;
