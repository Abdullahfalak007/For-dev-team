// import React, { useState, useEffect, useRef } from "react";
// import Navbar from "../components/Navbar";
// import UserSidebar from "../components/UserSidebar";
// import FileNameModal from "../components/FileNameModal";
// import imagesPath from "../data/imagesPath.json";
// import fileData from "../data/fileData.json";
// import "../index.css";

// const VoiceAssistantPage = () => {
//   const [userInput, setUserInput] = useState("");
//   const [clientMessages, setClientMessages] = useState([]);
//   const [userMessages, setUserMessages] = useState([]);
//   const [aiResponses, setAiResponses] = useState([]);
//   const [inputMessages, setInputMessages] = useState([]);
//   const [selectedTextPosition, setSelectedTextPosition] = useState(null);
//   const [isStarted, setIsStarted] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const updateSidebarHeight = () => {
//       if (sidebarRef.current) {
//         sidebarRef.current.style.height = `${document.documentElement.scrollHeight}px`;
//       }
//     };

//     updateSidebarHeight();
//     window.addEventListener("resize", updateSidebarHeight);
//     window.addEventListener("scroll", updateSidebarHeight);

//     return () => {
//       window.removeEventListener("resize", updateSidebarHeight);
//       window.removeEventListener("scroll", updateSidebarHeight);
//     };
//   }, []);

//   useEffect(() => {
//     const handleSelectionChange = () => {
//       const selection = window.getSelection();
//       if (selection && selection.toString().length > 0) {
//         const selectedElement = selection.anchorNode.parentElement;
//         if (
//           selectedElement &&
//           selectedElement.classList.contains("selectable-text")
//         ) {
//           const container = selectedElement.closest(".relative");
//           if (container) {
//             const containerRect = container.getBoundingClientRect();
//             setSelectedTextPosition({
//               top: containerRect.bottom + window.scrollY,
//               left: containerRect.left + containerRect.width / 2,
//             });
//           }
//         }
//       } else {
//         setSelectedTextPosition(null);
//       }
//     };

//     document.addEventListener("selectionchange", handleSelectionChange);

//     return () => {
//       document.removeEventListener("selectionchange", handleSelectionChange);
//     };
//   }, []);

//   useEffect(() => {
//     setClientMessages(fileData.clientMessages || []);
//     setUserMessages(fileData.userMessages || []);
//     setAiResponses(fileData.aiResponses || []);
//     setInputMessages(fileData.inputMessages || []);
//   }, []);

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSend = () => {
//     if (userInput.trim()) {
//       const newMessage = {
//         id: inputMessages.length + 1,
//         text: userInput,
//         timestamp: new Date().toISOString(),
//       };
//       setInputMessages((prevMessages) => [...prevMessages, newMessage]);
//       setUserInput("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const handleStartStop = () => {
//     if (isStarted) {
//       setIsModalOpen(true);
//     }
//     setIsStarted(!isStarted);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSaveFileName = (fileName) => {
//     console.log("File name saved:", fileName);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="flex">
//       <div className="h-full" ref={sidebarRef}>
//         <UserSidebar className="h-full" />
//       </div>
//       <div className="flex-1 flex flex-col">
//         <div className="flex-shrink-0">
//           <Navbar
//             title="Voice Assistants"
//             showAddIcon={false}
//             showSearchBar={false}
//           />
//         </div>
//         <div className="flex-1 p-4">
//           <div className="mb-8 mt-[-1rem] flex justify-left">
//             <button
//               className="flex items-center text-white p-2 rounded-[0.7675rem]"
//               style={{
//                 width: "5.60256rem",
//                 height: "2.07219rem",
//                 background:
//                   "linear-gradient(270deg, #00B7FE -10.19%, #5823FF 100%)",
//               }}
//               onClick={handleStartStop}
//             >
//               <img
//                 src={
//                   isStarted
//                     ? imagesPath.Chat.stopIcon
//                     : imagesPath.Chat.startIcon
//                 }
//                 alt={isStarted ? "Stop" : "Start"}
//                 className="w-4 h-4 mr-2"
//               />
//               {isStarted ? "Stop" : "Start"}
//             </button>
//           </div>
//           <div
//             className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar"
//             style={{
//               backgroundImage: `url(${imagesPath.Chat.clientBackground})`,
//               backgroundSize: "cover",
//               width: "62.125rem",
//               height: "34.0625rem",
//               borderRadius: "0.9375rem",
//             }}
//           >
//             {clientMessages.map((message) => (
//               <div key={message.id} className="relative mb-8">
//                 <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
//                   Client
//                 </h3>
//                 <div className="relative">
//                   <p
//                     className="mt-2 p-8 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal selectable-text"
//                     data-id={message.id}
//                   >
//                     {message.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//             {userMessages.map((message) => (
//               <div key={message.id} className="relative mb-8">
//                 <div className="text-right mr-4">
//                   <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
//                     User Name
//                   </h3>
//                   <p
//                     className="mt-2 p-4 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal selectable-text"
//                     data-id={message.id}
//                   >
//                     {message.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//             {selectedTextPosition && (
//               <div
//                 className="absolute transform -translate-x-1/2"
//                 style={{
//                   top: selectedTextPosition.top - 170,
//                   left: selectedTextPosition.left - 350,
//                   transform: "translate(-50%, 0)",
//                 }}
//               >
//                 <button className="bg-[#E3EDFF] text-customBlue rounded-full w-[5rem] h-[1.625rem] text-[#0771EF] font-poppins text-[0.68456rem] font-normal">
//                   Ask AI
//                 </button>
//               </div>
//             )}
//           </div>
//           <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal mt-2 ml-8">
//             AI Assistant
//           </h3>
//           <div
//             className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar mt-2"
//             style={{
//               backgroundImage: `url(${imagesPath.Chat.aiAssistantBackground})`,
//               backgroundSize: "cover",
//               width: "62.125rem",
//               height: "16.9375rem",
//               borderRadius: "0.9375rem",
//             }}
//           >
//             <div className="relative">
//               {aiResponses.map((response) => (
//                 <div key={response.id} className="flex justify-start mt-2">
//                   <p className="text-[#333232] font-poppins text-base p-2 text-[0.937rem]">
//                     {response.text}
//                   </p>
//                 </div>
//               ))}
//               {inputMessages.map((message) => (
//                 <div key={message.id} className="flex justify-end mt-2">
//                   <p className="text-[#333232] font-poppins text-base p-4 bg-white rounded-lg shadow">
//                     {message.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="relative mt-4">
//               <div className="relative flex items-center">
//                 <input
//                   type="text"
//                   placeholder="Type your message..."
//                   value={userInput}
//                   onChange={handleInputChange}
//                   onKeyPress={handleKeyPress}
//                   className="w-[53.5rem] h-[3.9375rem] flex-shrink-0 rounded-full bg-white p-4 mt-20 shadow mr-4 text-[#333232] font-poppins text-[0.9375rem] font-normal"
//                 />
//                 <button
//                   className="bg-blue-500 text-white rounded-full p-4 mt-20"
//                   onClick={handleSend}
//                 >
//                   <img
//                     src={imagesPath.Chat.sendIcon}
//                     alt="Send"
//                     className="w-6 h-6"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalOpen && (
//         <FileNameModal onClose={handleCloseModal} onSave={handleSaveFileName} />
//       )}
//     </div>
//   );
// };

// export default VoiceAssistantPage;

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchChatHistory,
  updateSelectedText,
  addInputMessage,
} from "../store/thunks/chatHistoryThunk";
import Navbar from "../components/Navbar";
import UserSidebar from "../components/UserSidebar";
import FileNameModal from "../components/FileNameModal";
import imagesPath from "../data/imagesPath.json";
import "../index.css";

const VoiceAssistantPage = () => {
  const dispatch = useDispatch();
  const chatHistory = useSelector((state) => state.chatHistory.currentFile);
  const [userInput, setUserInput] = useState("");
  const [selectedTextPosition, setSelectedTextPosition] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sidebarRef = useRef(null);
  const fileId = "unique-file-id-1"; // Change to the appropriate file ID

  useEffect(() => {
    dispatch(fetchChatHistory(fileId));
  }, [dispatch]);

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
      if (selection && selection.toString().length > 0) {
        const selectedElement = selection.anchorNode.parentElement;
        if (
          selectedElement &&
          selectedElement.classList.contains("selectable-text")
        ) {
          const container = selectedElement.closest(".relative");
          if (container) {
            const containerRect = container.getBoundingClientRect();
            setSelectedTextPosition({
              top: containerRect.bottom + window.scrollY,
              left: containerRect.left + containerRect.width / 2,
            });

            // Dispatch the selected text to be saved
            const selectedText = selection.toString();
            const selectedTextId = selectedElement.getAttribute("data-id");
            dispatch(
              updateSelectedText({ fileId, selectedTextId, selectedText })
            );
          }
        }
      } else {
        setSelectedTextPosition(null);
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);

    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, [dispatch]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessage = {
        id: chatHistory?.inputMessages?.length + 1 || 1,
        text: userInput,
        timestamp: new Date().toISOString(),
      };

      // Dispatch the action to add the input message
      dispatch(addInputMessage({ fileId, newMessage }));

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
      setIsModalOpen(true);
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
        <UserSidebar className="h-full" />
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
            {chatHistory?.clientMessages.map((message) => (
              <div key={message.id} className="relative mb-8">
                <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
                  Client
                </h3>
                <div className="relative">
                  <p
                    className="mt-2 p-8 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal selectable-text"
                    data-id={message.id}
                  >
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
            {chatHistory?.userMessages.map((message) => (
              <div key={message.id} className="relative mb-8">
                <div className="text-right mr-4">
                  <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
                    User Name
                  </h3>
                  <p
                    className="mt-2 p-4 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal selectable-text"
                    data-id={message.id}
                  >
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
            {selectedTextPosition && (
              <div
                className="absolute transform -translate-x-1/2"
                style={{
                  top: selectedTextPosition.top - 170,
                  left: selectedTextPosition.left - 350,
                  transform: "translate(-50%, 0)",
                }}
              >
                <button className="bg-[#E3EDFF] text-customBlue rounded-full w-[5rem] h-[1.625rem] text-[#0771EF] font-poppins text-[0.68456rem] font-normal">
                  Ask AI
                </button>
              </div>
            )}
          </div>
          <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal mt-2 ml-8">
            AI Assistant
          </h3>
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
              {chatHistory?.aiResponses.map((response) => (
                <div key={response.id} className="flex justify-start mt-2">
                  <p className="text-[#333232] font-poppins text-base p-2 text-[0.937rem]">
                    {response.text}
                  </p>
                </div>
              ))}
              {chatHistory?.inputMessages.map((message) => (
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
