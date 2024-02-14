import React from "react";
import { SlLocationPin } from "react-icons/sl";

export default function Temperature({ item, setCity }) {
  function handlechange(e) {
    setCity(e.target.value);
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-center ">
        <input
          type="text"
          className="bg-slate-600 p-2 rounded-sm focus:outline-none text-slate-400 text-center"
          placeholder="Enter your city name"
          defaultValue={"New Delhi"}
          onChange={handlechange}
        />
        <span className="text-white ml-4 mt-2">
          <SlLocationPin className="text-2xl text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" />
        </span>
      </div>
      <div className="flex justify-center mt-3s">
       
      <span className="text-white  text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"><img className="w-24" src={item.current.condition.icon} alt="logo"/></span>

      </div>

      <div className="flex justify-center mt-3 text-white">
        <p className="text-3xl">{item.current.temp_c}C</p>
        <sub>.</sub>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <span className="text-xl">{item.current.condition.text}</span>
      </div>
      <div className="flex justify-center mt-8 text-white">
        <span className="text-slate-500 ">
          Today / {item.location.localtime} / {item.location.name},{item.location.region},({item.location.country})
        </span>
      </div>
    </div>
  );
}
