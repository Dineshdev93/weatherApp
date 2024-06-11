import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";

export default function Temperature({ item, setCity }) {
  // get the input value through states
  const [inpval,setInpVal] = useState("")
  function handlechange(e) {
    setInpVal(e.target.value);
  }
  // submit button when it triggerd that time data will fetch through api
  const submit = () =>{
       setCity(inpval)
  }
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center ">
        <input
          type="text"
          className="bg-slate-600 p-2 rounded-sm focus:outline-none text-slate-400 text-center font-semibold tracking-widest"
          placeholder="Enter your city name"
          defaultValue={"Jaipur"}
          onChange={handlechange}
        />
        <span className="text-white ml-4 mt-1">
          {/* <SlLocationPin className="text-2xl text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" /> */}
          <button onClick={submit} className="border w-28 h-8 rounded-sm font-semibold tracking-widest bg-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white">Submit</button>
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
        <span className="text-slate-300 text-[16px] italic">
          Today /{item.location.localtime}/{item.location.name},{item.location.region},({item.location.country})
        </span>
      </div>
    </div>
  );
}
