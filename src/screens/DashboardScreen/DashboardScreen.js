import React from "react";
import logo from "../../assets/master-logo.png";
import "./dashboard.css";
import graphics from "../../assets/graphics.png";
import touchid from "../../assets/touchid.png";
import faceid from "../../assets/faceid.png";
import px from "../../assets/px.png";
import doctor from "../../assets/doctor.png";
import manlogo from "../../assets/man-icon.png";

const DashboardScreen = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex">
      <img
        src={graphics}
        alt=""
        className="absolute flex m-0 w-screen h-screen object-cover"
      />
      <img src={touchid} alt="" className="touchfloat absolute" />
      <img src={faceid} alt="" className="facefloat absolute" />
      <img src={px} alt="" className="pxfloat absolute" />
      <img src={doctor} alt="" className="doctorfloat absolute" />

      <div className="flex flex-col w-full p-5 gap-y-5">
        {/* Top nav */}
        <div className="flex flex-row text-center justify-around z-50 bg-opacity-50 p-5 rounded-xl w-full h-fit bg-slate-800">
          <div className="flex flex-col">
            <img src={logo} alt="S.O.S" className="w-32 logo" />
            <div className="typing-logo mt-2 text-center">
              Scan . Obtain . Save
            </div>
          </div>
          <div className="flex flex-row gap-3 text-slate-900 dark:text-slate-300 font-righteous uppercase text-3xl ">
            <span className="flex flex-col justify-center text-emerald-400">
              User's
            </span>
            <span className="flex flex-col justify-center">Dashboard</span>
          </div>
          <div className="flex flex-row ">
            <div className="flex flex-col justify-center">
              <img
                src={manlogo}
                alt="user"
                className="w-12 user-logo bg-slate-500 p-1 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row text-center justify-around text-slate-900 dark:text-slate-300 z-50 bg-opacity-50 p-5 rounded-xl w-full h-full bg-slate-800">
          <div className="text-4xl">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
