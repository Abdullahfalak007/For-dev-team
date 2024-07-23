import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import UserSidebar from "../components/UserSidebar";
import ChatHistory from "../components/ChatHistory";
import imagesPath from "../data/imagesPath.json";
import fileData from "../data/fileData.json"; // Importing JSON data
import "../index.css"; // Ensure this import is present for custom scrollbar styles

const CallHistoryPage = () => {
  const [selectedPage, setSelectedPage] = useState("Call History");
  const [selectedFile, setSelectedFile] = useState(null); // For displaying chat history
  const sidebarRef = useRef(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseChatHistory = () => {
    setSelectedFile(null);
  };

  useEffect(() => {
    const updateSidebarHeight = () => {
      if (sidebarRef.current) {
        sidebarRef.current.style.height = `${document.documentElement.scrollHeight}px`;
      }
    };

    updateSidebarHeight();
    window.addEventListener("resize", updateSidebarHeight);
    window.addEventListener("scroll", updateSidebarHeight);

    return () => {
      window.removeEventListener("resize", updateSidebarHeight);
      window.removeEventListener("scroll", updateSidebarHeight);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <div className="h-full" ref={sidebarRef}>
        <UserSidebar setSelectedPage={setSelectedPage} className="h-full" />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar
            title="Call History"
            showAddIcon={false}
            showSearchBar={!selectedFile}
            showSecondSearchBar={!selectedFile} // This will enable the second search bar
            searchBarPlaceholder="Client Name"
            secondSearchBarPlaceholder="File Name"
          />
        </div>
        {!selectedFile ? (
          <div className="flex-1 p-4 overflow-auto">
            <div className="flex flex-wrap -mx-2">
              {fileData.map((file, index) => (
                <div
                  key={index}
                  className="bg-[#eef2f5] rounded-[1.27688rem] shadow p-2 m-2 flex items-center space-x-4 w-[14.89719rem] h-[7.21438rem] relative cursor-pointer"
                  onClick={() => handleFileClick(file)}
                >
                  <div
                    className="absolute bg-customBlue text-white text-[0.5195rem] font-poppins font-medium rounded-r-[1.27688rem] py-1 px-1"
                    style={{
                      width: "5.36288rem",
                      height: "1.21306rem",
                      left: "-0.05rem",
                      top: "1.2rem",
                    }}
                  >
                    Date: {file.date}
                  </div>
                  <div className="flex-shrink-0 mt-6">
                    <div className="w-16 h-16 ml-[-0.7rem] flex items-center justify-center">
                      <img
                        src={imagesPath.CallHistory.savedFileIcon}
                        alt="Saved File Icon"
                        className="w-[3.19219rem] h-[3.19219rem]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-2 mt-6">
                    <div className="text-customBlue text-[0.76481rem] font-poppins font-medium">
                      File Name:{" "}
                      <span className="text-[#595959]">{file.fileName}</span>
                    </div>
                    <div className="text-customBlue text-[0.76481rem] font-poppins font-medium">
                      Client:{" "}
                      <span className="text-[#595959]">{file.client}</span>
                    </div>
                    <div className="text-customBlue text-[0.76481rem] font-poppins font-medium">
                      Time: <span className="text-[#595959]">{file.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ChatHistory file={selectedFile} onClose={handleCloseChatHistory} />
        )}
      </div>
    </div>
  );
};

export default CallHistoryPage;
