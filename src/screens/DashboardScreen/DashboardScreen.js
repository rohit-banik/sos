import React, { useState } from "react";
import "./dashboard.css";
import logo from "../../assets/images/master-logo.png";
import graphics from "../../assets/images/graphics.png";
import touchid from "../../assets/images/touchid.png";
import faceid from "../../assets/images/faceid.png";
import px from "../../assets/images/px.png";
import doctor from "../../assets/images/doctor.png";
import manlogo from "../../assets/images/man-icon.png";

import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const buttonTheme = createTheme({
  palette: {
    success: {
      main: "#00e676",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: ["Fresca"],
  },
});

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "contact", label: " Contact", minWidth: 100 },
];

const createData = (name, contact) => {
  return { name, contact };
};

const rows = [
  createData("Rohit", 7894561234),
  createData("Shakya Bhattacharyya", 1403500365),
  createData("Pratyushan Paul", 6048397330),
  createData("Koi bhi", 3271674349),
  createData("Kuch bhi", 3760210399),
  createData("Kabhi bhi", 2547540076),
  createData("Kahin bhi", 8301920035),
  createData("Kaise bhi", 4857000702),
];

const DashboardScreen = () => {
  const [showAddContact, setShowAddContact] = useState(false);
  const [showSosContacts, setShowSosContacts] = useState(false);
  const handleAddContactButton = () => {
    showAddContact
      ? setShowAddContact(false)
      : setShowAddContact(true) && setShowSosContacts(false);
  };
  const handleSosContactButton = () => {
    showSosContacts && !showAddContact
      ? setShowSosContacts(false)
      : setShowSosContacts(true) && setShowAddContact(false);
  };

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

        <div className="flex flex-row text-center justify-around z-50 gap-x-5 w-full h-full">
          <div className="flex flex-col gap-y-5 text-slate-900 bg-opacity-50 dark:text-slate-300 w-96 p-5 bg-slate-800 rounded-xl">
            <img
              src={manlogo}
              alt=""
              className="w-40 bg-slate-400 rounded-full p-1 mx-auto"
            />
            <div className="text-3xl">Ritwik Satpati</div>
            <ThemeProvider theme={buttonTheme}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSosContactButton}
              >
                <div className="flex flex-row gap-2 text-lg items-center text-black font-medium">
                  <GrContactInfo className="text-2xl" /> S.O.S Contacts
                </div>
              </Button>
            </ThemeProvider>
          </div>

          {showSosContacts ? (
            <div className="absolute rounded-lg top-0 p-5 translate-y-52 bg-slate-500 bg-opacity-50 w-fit">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="flex justify-between items-center pb-4 gap-5">
                  <div>
                    <button
                      class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={handleAddContactButton}
                    >
                      <AiOutlineUserAdd class="mr-2 w-4 h-4 text-gray-400" />
                      Add new Contact
                    </button>
                  </div>

                  {/* <label for="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <AiOutlineSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    class="block p-2 pl-10 w-80 text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                  />
                </div> */}
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      {columns.map((column) => (
                        <th scope="col" className="py-3 px-6" key={column.id}>
                          {column.label}
                        </th>
                      ))}
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr
                        key={row.name}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="py-4 px-6">{row.name}</td>
                        <td className="py-4 px-6">{row.contact}</td>

                        <td className="py-4 px-6">
                          <div className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">
                            Delete
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            ""
          )}

          {showAddContact ? (
            <div className="absolute rounded-lg top-0 p-5 translate-y-96 bg-slate-500 bg-opacity-50 w-fit">
              <h1 className="text-slate-100 text-2xl px-2 pb-2">
                Register new{" "}
                <span className="text-rose-500 uppercase font-semibold">
                  S.O.S{" "}
                </span>
                contact
              </h1>
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-base font-medium uppercase text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <div className="relative mb-3">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <GoPerson className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g., Bob Wilson"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-left text-base font-medium uppercase text-gray-900 dark:text-gray-300"
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
              <ThemeProvider theme={buttonTheme}>
                <div className="gap-2 flex">
                  <Button variant="contained" color="success" size="large">
                    <div className="flex flex-row text-lg items-center text-black font-medium">
                      <AiOutlineUserAdd className="text-xl" /> Add Contact
                    </div>
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={handleAddContactButton}
                    size="large"
                  >
                    <div className="flex flex-row text-lg items-center text-black font-medium">
                      <IoCloseOutline className="text-2xl" /> Close
                    </div>
                  </Button>
                </div>
              </ThemeProvider>
            </div>
          ) : (
            ""
          )}

          <div className="flex text-slate-900 dark:text-slate-300 bg-opacity-50 p-5 bg-slate-800 w-full rounded-xl">
            Hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
