// src/pages/VoiceAssistantPage.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import UserSidebar from "../components/UserSidebar";
import FileNameModal from "../components/FileNameModal"; // Make sure to create this component
import imagesPath from "../data/imagesPath.json";
import "../index.css"; // Ensure this import is present for custom scrollbar styles

const VoiceAssistantPage = () => {
  const [userInput, setUserInput] = useState("");
  const [clientMessages, setClientMessages] = useState([
    {
      id: 1,
      text: "CyberGen is a company that specializes in providing comprehensive IT solutions and advanced technology tailored for businesses. We offer a range of services including Cyber Security Solutions, Software Development, Marketing Services, Managed Services, Professional Services, Strategic Staffing, Technical Training, and Artificial Intelligence.",
    },
  ]);
  const [userMessages, setUserMessages] = useState([
    {
      id: 1,
      text: "CyberGen is a company that specializes in providing comprehensive IT solutions...",
    },
  ]);
  const [aiResponses, setAiResponses] = useState([
    { id: 1, text: "This is an AI response for the message from CyberGen." },
  ]);
  const [inputMessages, setInputMessages] = useState([]);
  const [selectedPage, setSelectedPage] = useState("Voice Assistants");
  const [isStarted, setIsStarted] = useState(false);
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sidebarRef = useRef(null);

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

  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection();
      setIsTextSelected(selection && selection.toString().length > 0);
    };

    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      setInputMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: userInput },
      ]);
      setUserInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleStartStop = () => {
    if (isStarted) {
      setIsModalOpen(true); // Open the modal when stopping
    }
    setIsStarted(!isStarted);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveFileName = (fileName) => {
    console.log("File name saved:", fileName);
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <div className="h-full" ref={sidebarRef}>
        <UserSidebar setSelectedPage={setSelectedPage} className="h-full" />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-shrink-0">
          <Navbar
            title="Voice Assistants"
            showAddIcon={false}
            showSearchBar={false}
          />
        </div>
        <div className="flex-1 p-4">
          <div className="mb-8 mt-[-1rem] flex justify-left">
            <button
              className="flex items-center text-white p-2 rounded-[0.7675rem]"
              style={{
                width: "5.60256rem",
                height: "2.07219rem",
                background:
                  "linear-gradient(270deg, #00B7FE -10.19%, #5823FF 100%)",
              }}
              onClick={handleStartStop}
            >
              <img
                src={
                  isStarted
                    ? imagesPath.Chat.stopIcon
                    : imagesPath.Chat.startIcon
                }
                alt={isStarted ? "Stop" : "Start"}
                className="w-4 h-4 mr-2"
              />
              {isStarted ? "Stop" : "Start"}
            </button>
          </div>
          <div
            className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar"
            style={{
              backgroundImage: `url(${imagesPath.Chat.clientBackground})`,
              backgroundSize: "cover",
              width: "62.125rem",
              height: "34.0625rem",
              borderRadius: "0.9375rem",
            }}
          >
            {clientMessages.map((message) => (
              <div key={message.id} className="relative mb-8">
                <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
                  Client
                </h3>
                <div className="relative">
                  <p className="mt-2 p-8 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal">
                    {message.text}
                  </p>
                  {isTextSelected && (
                    <div className="absolute bottom-[-0.8125rem] left-1/2 transform -translate-x-1/2">
                      <button className="bg-[#E3EDFF] text-customBlue rounded-full w-[5rem] h-[1.625rem] text-[#0771EF] font-poppins text-[0.68456rem] font-normal">
                        Ask AI
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {userMessages.map((message) => (
              <div
                key={message.id}
                className="relative mb-8 flex justify-end items-center"
              >
                <div className="text-right mr-4">
                  <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
                    User Name
                  </h3>
                  <p className="mt-2 p-4 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal mt-2 ml-8">
            AI Assistant
          </h3>
          {/* New AI Assistant Container */}
          <div
            className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar mt-2"
            style={{
              backgroundImage: `url(${imagesPath.Chat.aiAssistantBackground})`,
              backgroundSize: "cover",
              width: "62.125rem",
              height: "16.9375rem",
              borderRadius: "0.9375rem",
            }}
          >
            <div className="relative">
              {aiResponses.map((response) => (
                <div key={response.id} className="flex justify-start mt-2">
                  <p className="text-[#333232] font-poppins text-base p-2 text-[0.937rem]">
                    {response.text}
                  </p>
                </div>
              ))}
              {inputMessages.map((message) => (
                <div key={message.id} className="flex justify-end mt-2">
                  <p className="text-[#333232] font-poppins text-base p-4 bg-white rounded-lg shadow">
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative mt-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={userInput}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="w-[53.5rem] h-[3.9375rem] flex-shrink-0 rounded-full bg-white p-4 mt-20 shadow mr-4 text-[#333232] font-poppins text-[0.9375rem] font-normal"
                />
                <button
                  className="bg-blue-500 text-white rounded-full p-4 mt-20"
                  onClick={handleSend}
                >
                  <img
                    src={imagesPath.Chat.sendIcon}
                    alt="Send"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <FileNameModal onClose={handleCloseModal} onSave={handleSaveFileName} />
      )}
    </div>
  );
};

export default VoiceAssistantPage;
