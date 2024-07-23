import React, { useState } from "react";

const FileNameModal = ({ onClose, onSave }) => {
  const [fileName, setFileName] = useState("");

  const handleSave = () => {
    onSave(fileName);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[1.81856rem] p-8 w-[34.625rem] h-[15.625rem] flex flex-col justify-center">
        <h2 className="text-[#000] font-poppins text-[1.22875rem] font-medium mb-4 text-left">
          Enter File Name
        </h2>
        <input
          type="text"
          className="w-[31.125rem] h-[3.5625rem] rounded-[1.81856rem] bg-[#EEF2F5] p-4 mb-8"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <div className="flex space-x-4 justify-center">
          <button
            className="text-[#595959] font-poppins text-[0.97869rem] font-medium"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-[4.625rem] h-[1.8125rem] rounded-full text-white font-poppins text-[0.97869rem] font-medium"
            style={{
              background:
                "linear-gradient(270deg, #00B7FE -10.19%, #5823FF 100%)",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileNameModal;
