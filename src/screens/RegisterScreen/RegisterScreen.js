import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import logo from "../../assets/master-logo.png";
import graphics from "../../assets/graphics.png";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";

const theme = createTheme({
  palette: {
    success: {
      main: "#00e676",
    },
  },
});

const LoginScreen = () => {
  return (
    <div className="bg-gray-900 flex w-screen h-screen flex-col items-center">
      <img
        src={graphics}
        alt=""
        className="absolute flex m-0 w-screen h-screen object-cover"
      />

      <div className="flex flex-col justify-center mt-20">
        <img src={logo} alt="S.O.S" className="w-64 logo" />
        <div className="typing-demo mt-2">Scan . Obtain . Save</div>
      </div>
      <div className="mt-10">
        <h1 className="text-slate-100 text-5xl">
          Welcome to S.O.S,{" "}
          <span className="text-rose-500 uppercase font-semibold">
            Champion
          </span>
        </h1>

        <div className="text-slate-300 text-3xl border-t border-slate-700 px-10 py-8 my-2 rounded-sm">
          <div>Register your Health</div>

          <div>
            <label
              htmlFor="input-group-1"
              className="block mt-5 mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MdEmail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@sos.com"
              />
            </div>
            <label
              htmlFor="input-group-2"
              className="block mt-5 mb-2 text-lg font-medium uppercase text-gray-900 dark:text-gray-300"
            >
              Your Password
            </label>
            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <MdOutlinePassword className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="password"
                id="input-group-2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="*************"
              />
            </div>
          </div>
          <div className="relative text-xl mb-5">
            Already joined us?{" "}
            <Link to={"/login"} className="text-rose-500 uppercase">
              Login
            </Link>{" "}
            now
          </div>

          <div className="text-right">
            <ThemeProvider theme={theme}>
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

export default LoginScreen;
