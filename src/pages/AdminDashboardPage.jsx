import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import NumberOfCallsChart from "../components/NumberOfCallsChart";
import TotalBotsChart from "../components/TotalBotsChart";
import TotalClientsChart from "../components/TotalClientsChart"; // Import the new component
import imagesPath from "../data/imagesPath.json";

const AdminDashboardPage = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar setSelectedPage={setSelectedPage} className="h-full" />
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar
            title={<span className="text-customBlue">Dashboard</span>}
            showAddIcon={false}
            showSearchBar={false}
            showSecondSearchBar={false}
          />
        </div>
        <div className="flex-1 p-4">
          {/* Content of the dashboard page */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-customBlue rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.totalClientsIcon}
                alt="Total Clients"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Total Clients
              </h3>
              <p className="text-white font-poppins text-2xl font-semibold">
                67
              </p>
            </div>
            <div className="bg-[#6049cd] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.totalAssistantsIcon}
                alt="Total Assistants"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Total Assistants
              </h3>
              <p className="text-white font-poppins text-2xl font-semibold">
                12
              </p>
            </div>
            <div className="bg-[#fa992a] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.totalBotsIcon}
                alt="Total Bots"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Total Bots
              </h3>
              <p className="text-white font-poppins text-2xl font-semibold">
                500
              </p>
            </div>
            <div className="bg-[#03a7cb] rounded-[1.02206rem] w-[13.79775rem] h-[9.60731rem] shadow p-4 flex flex-col items-center justify-center">
              <img
                src={imagesPath.AdminDashboardPage.assignVAIcon}
                alt="Assign VA"
                className="w-12 h-12"
              />
              <h3 className="text-white font-poppins text-lg font-medium mt-2">
                Assign VA
              </h3>
            </div>
          </div>
          <NumberOfCallsChart />
          <div className="flex justify-between gap-4">
            <div className="flex-1 w-[25.0625rem]">
              <TotalBotsChart />
            </div>
            <div className="flex-1 w-[37.6875rem]">
              <TotalClientsChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
