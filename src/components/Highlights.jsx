import React from "react";
import { BiRightArrow } from "react-icons/bi";
const Highlights = ({data}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-white text-xl">Today's Highlights</h2>
      <div className="flex justify-between  mt-3">
        <div className=" bg-slate-600 p-2 w-40 text-center text-transform scale-100 hover:scale-110 transition-transform  ">
          <h3 className="text-slate-400">Wind Status</h3>
          <span className="text-white text-2xl font-thin">{data.current.wind_mph}</span>
          <div className="flex justify-center mt-3">
            <span className="text-white mt-1">
              <BiRightArrow />
            </span>
            <span className="text-white ml-2">{data.current.wind_dir}</span>
          </div>
        </div>
        <div className=" bg-slate-600 p-2 w-40 text-center text-transform scale-100 hover:scale-110 transition-transform  ">
          <h3 className="text-slate-400">Humidity</h3>
          <span className="text-white text-2xl font-thin">{data.current.humidity}%</span>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: `${data.current.humidity}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between  mt-8 ">
        <div className=" bg-slate-600 p-2 w-40 text-center text-transform scale-100 hover:scale-110 transition-transform  ">
          <h3 className="text-slate-400">Visibility</h3>
          <span className="text-white text-2xl font-thin">{data.current.vis_miles}-miles</span>
        </div>
        <div className=" bg-slate-600 p-2 w-40 text-center text-transform scale-100 hover:scale-110 transition-transform  ">
          <h3 className="text-slate-400">Air Preasure</h3>
          <span className="text-white text-2xl  font-thin">{data.current.pressure_mb}mb</span>
        </div>
      </div>
    </div>
  );
};
export default Highlights;
