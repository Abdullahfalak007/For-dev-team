// src/components/ChatHistory.jsx
import React from "react";
import imagesPath from "../data/imagesPath.json"; // Ensure the imagesPath import
import "../index.css";

const ChatHistory = ({ file }) => {
  return (
    <div className="flex-1 p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="text-customBlue font-poppins text-[1.12625rem] font-normal font-medium">
            File Name: <span className="text-[#595959]">{file.fileName}</span>
          </span>
          <span className="text-customBlue font-poppins text-[1.12625rem] font-normal font-medium">
            Client: <span className="text-[#595959]">{file.client}</span>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-customBlue font-poppins text-[1.12625rem] font-normal font-medium">
            Time: <span className="text-[#595959]">{file.time}</span>
          </span>
          <span className="text-customBlue font-poppins text-[1.12625rem] font-normal font-medium">
            Date: <span className="text-[#595959]">{file.date}</span>
          </span>
        </div>
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
        {file.chat.map((message, index) => (
          <div
            key={index}
            className={`relative mb-8 ${
              message.sender === "Client"
                ? "text-left self-start"
                : "text-right self-start"
            }`}
          >
            <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
              {message.sender}
            </h3>
            <div className="relative">
              <p className="mt-2 p-6 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal inline-block">
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
