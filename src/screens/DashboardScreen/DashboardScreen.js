import React from "react";
import "./dashboard.css";
import logo from "../../assets/images/master-logo.png";
import graphics from "../../assets/images/graphics.png";
import touchid from "../../assets/images/touchid.png";
import faceid from "../../assets/images/faceid.png";
import px from "../../assets/images/px.png";
import doctor from "../../assets/images/doctor.png";
import manlogo from "../../assets/images/man-icon.png";

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

        <div className="flex flex-row text-center justify-around z-50 gap-x-5 bg-opacity-50 w-full h-full">
          <div className="flex flex-col gap-y-5 text-slate-900 dark:text-slate-300 w-fit p-5 bg-slate-800 rounded-xl">
            <img
              src={manlogo}
              alt=""
              className="w-40 bg-slate-400 rounded-full p-1"
            />
            <div className="text-3xl">Ritwik Satpati</div>
          </div>
          <div className="flex text-slate-900 dark:text-slate-300 p-5 bg-slate-800 w-full rounded-xl">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
