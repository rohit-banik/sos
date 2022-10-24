import React, { useState } from "react";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "../RegisterScreen/register.css";
import logo from "../../assets/images/master-logo.png";
import graphics from "../../assets/images/graphics.png";
import touchid from "../../assets/images/touchid.png";
import faceid from "../../assets/images/faceid.png";
import px from "../../assets/images/px.png";
import doctor from "../../assets/images/doctor.png";

// import { DatePickerComponent } from "../../components";
import { Button } from "@mui/material";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { CiMobile3 } from "react-icons/ci";
import { CgHomeAlt } from "react-icons/cg";
import { BsDropletFill } from "react-icons/bs";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Fresca"],
    fontSize: 11,
  },
});

const buttonTheme = createTheme({
  palette: {
    success: {
      main: "#00e676",
    },
  },
});

const RegisterScreen = () => {
  const bloodGrp = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [value, setValue] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  return (
    <div className="overflow-scroll bg-gray-900 flex w-screen h-screen flex-col items-center">
      <img
        src={graphics}
        alt=""
        className="absolute flex m-0 w-screen h-screen"
      />

      <img src={touchid} alt="" className="touchfloat absolute" />
      <img src={faceid} alt="" className="facefloat absolute" />
      <img src={px} alt="" className="pxfloat absolute" />
      <img src={doctor} alt="" className="doctorfloat absolute" />

      <div className="flex flex-col justify-center mt-20 z-50">
        <img src={logo} alt="S.O.S" className="w-64 logo" />
        <div className="typing-demo mt-2">Scan . Obtain . Save</div>
      </div>
      <div className="mt-10 z-50 rounded-md">
        <h1 className="text-slate-100 text-5xl px-2 pb-2 border-b border-slate-700">
          Welcome to S.O.S,{" "}
          <span className="text-rose-500 uppercase font-semibold">Champ</span>
        </h1>

        <div className="text-slate-300 text-3xl px-5 py-8 mb-2">
          <div>Register your Health</div>

          <div>
            {/* Name */}
            <div className="flex flex-row justify-between">
              {/* First name */}
              <div className="flex flex-col">
                <label
                  htmlFor="first-name"
                  className="block mt-5 mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <GoPerson className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="first-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g., Bob"
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="last-name"
                  className="block mt-5 mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
                >
                  last Name
                </label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <GoPerson className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="last-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g., Wilson"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
              >
                Address
              </label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <CgHomeAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="32, Entry Street, City, 400029"
                />
              </div>
            </div>

            {/* Mobile number */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
              >
                Mobile number
              </label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <CiMobile3 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="number"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e.g., 9876543210"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
              >
                Email-Id
              </label>
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <MdEmail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="bobwilson@sos.com"
                />
              </div>
            </div>

            {/* Blood DOB */}
            <div className="flex flex-row gap-2 justify-between">
              {/* Blood Group */}
              <div>
                <label
                  htmlFor="blood-grp"
                  className="block mb-2 uppercase text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Blood Group
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <BsDropletFill className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                  </div>
                  <select
                    id="blood-grp"
                    className="py-4 pl-10 bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option
                      defaultValue={true}
                      value="Choose your blood group"
                      disabled
                    >
                      Choose your blood group
                    </option>
                    {bloodGrp.map((element) => (
                      <option key={element} value={element}>
                        {element}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* DOB */}
              <div className="relative">
                <label
                  htmlFor="blood-grp"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  DOB (mm/dd/yyyy)
                </label>
                <ThemeProvider theme={theme}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    className="outline-none"
                  >
                    <DatePicker
                      disableFuture
                      openTo="day"
                      views={["year", "month", "day"]}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      className="bg-gray-50 border-1 border-gray-300 outline-none text-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </LocalizationProvider>
                </ThemeProvider>
                {/* <DatePickerComponent onChange={(e) => console.log(e.value)} /> */}
              </div>
            </div>

            {/* password */}
            <div className="flex flex-row gap-2 justify-between">
              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mt-5 mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <MdOutlinePassword className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={
                      showPassword ? "Password plzz !" : "*************"
                    }
                  />
                  <label
                    onClick={() => setShowPassword(!showPassword)}
                    class="absolute right-1.5 top-1.5 p-1.5 hover:text-emerald-300 rounded-full hover:bg-slate-600 text-xl text-rose-300 cursor-pointer"
                    for="toggle"
                  >
                    {showPassword ? <RiEyeFill /> : <RiEyeCloseFill />}
                  </label>
                </div>
              </div>
              {/* confirm passowrd */}
              <div>
                <label
                  htmlFor="cpassword"
                  className="block mt-5 mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
                >
                  Confirm Password
                </label>
                <div className="relative mb-6">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <MdOutlinePassword className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type={showCPassword ? "text" : "password"}
                    id="cpassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={
                      showCPassword ? "Once More !" : "*************"
                    }
                  />
                  <label
                    onClick={() => setShowCPassword(!showCPassword)}
                    class="absolute right-1.5 top-1.5 p-1.5 hover:text-emerald-300 rounded-full hover:bg-slate-600 text-xl text-rose-300 cursor-pointer"
                    for="toggle"
                  >
                    {showCPassword ? <RiEyeFill /> : <RiEyeCloseFill />}
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Redirect Link */}
          <div className="relative text-xl mb-3">
            Already joined us?{" "}
            <Link to={"/login"} className="text-rose-500 uppercase">
              Login
            </Link>{" "}
            now
          </div>

          {/* Button */}
          <div className="text-right">
            <ThemeProvider theme={buttonTheme}>
              <Button
                variant="contained"
                startIcon={<AiOutlineLogin />}
                color="success"
                size="large"
              >
                Register
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
