import React, { useRef, useEffect, useState } from "react";
import imagesPath from "../data/imagesPath.json";
import "../index.css";

const KnowledgeBaseModal = ({
  isOpen,
  onClose,
  onSave,
  formData,
  setFormData,
  isEditMode,
  clients,
}) => {
  const modalRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  const [isTrained, setIsTrained] = useState(false);
  const [isError, setIsError] = useState(false); // State to handle error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
      setIsTrained(false); // Reset the trained state
      setIsError(false); // Reset the error state
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files.map((file) => file.name));
    setIsFileUploaded(true);
  };

  const handleFileUploadClick = () => {
    document.getElementById("fileUpload").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.client || !formData.bot || uploadedFiles.length === 0) {
      alert("Please fill out all fields and upload at least one file.");
      return;
    }
    onSave({ ...formData, documents: uploadedFiles });

    // Simulate a 3-5 second delay for the training process
    setIsTraining(true);
    setTimeout(() => {
      setIsTraining(false);
      const isSuccess = Math.random() > 0.5; // Dummy condition for success/failure
      if (isSuccess) {
        setIsTrained(true);
      } else {
        setIsError(true);
      }
    }, Math.random() * (5000 - 3000) + 3000);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isEditMode && formData.documents) {
      setUploadedFiles(formData.documents);
      setIsFileUploaded(true);
    }
  }, [isEditMode, formData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      {isTraining ? (
        <div className="training-modal">
          <span className="text-lg font-medium">Training Your Assistant</span>
          <div className="progress-bar-container">
            <div className="progress-bar">
              {Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="progress-box"></div>
              ))}
            </div>
          </div>
        </div>
      ) : isTrained ? (
        <div
          ref={modalRef}
          className="w-[34.625rem] h-[22.5625rem] flex-shrink-0 rounded-[1.81856rem] bg-white flex flex-col items-center justify-center"
        >
          <img
            src={imagesPath.KnowledgeBase.successIcon}
            alt="Success"
            className="w-[5.375rem] h-[5.375rem] mb-2"
          />
          <span className="font-poppinsRegular text-[1.22875rem] font-medium">
            Success
          </span>
        </div>
      ) : isError ? (
        <div
          ref={modalRef}
          className="w-[34.625rem] h-[22.5625rem] flex-shrink-0 rounded-[1.81856rem] bg-white flex flex-col items-center justify-center"
        >
          <img
            src={imagesPath.KnowledgeBase.successIcon}
            alt="Success"
            className="w-[5.375rem] h-[5.375rem] mb-2"
          />
          <span className="font-poppinsRegular text-[1.22875rem] font-medium">
            Success
          </span>
        </div>
      ) : (
        <div
          ref={modalRef}
          className="relative bg-white flex-shrink-0 w-[34.625rem] h-[36.375rem] rounded-[1.81856rem]"
        >
          <div className="bg-customBlue rounded-t-lg flex items-center justify-center relative h-[5.20994rem] rounded-t-[1.81856rem]">
            {!uploadedImage ? (
              <>
                <img
                  src={imagesPath.Modal.uploadIconBg}
                  alt="Background"
                  className="absolute w-[11rem] h-[10.07588rem] top-10 cursor-pointer"
                  onClick={() => document.getElementById("imageUpload").click()}
                />
                <img
                  src={imagesPath.Modal.uploadIcon}
                  alt="Icon"
                  className="absolute w-[1.73613rem] h-[1.5625rem] top-[6rem]"
                />
                <span className="absolute font-poppinsMedium text-[0.71231rem] font-semibold top-[8rem]">
                  Upload Profile
                </span>
              </>
            ) : (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="absolute w-[11rem] h-[10.07588rem] top-10 rounded-full"
              />
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <div className="text-center mt-32">
            <h2 className="text-[1.22875rem] font-medium text-black font-poppinsMedium">
              {isEditMode ? "Edit a bot" : "Create a bot"}
            </h2>
          </div>
          <form className="px-8 pt-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center">
              <label
                className="text-left mr-8 w-[6rem] text-[#8C8C8C] font-inter text-[0.8125rem] font-medium"
                htmlFor="client"
              >
                Client
              </label>
              <select
                name="client"
                id="client"
                value={formData.client}
                onChange={handleChange}
                className="w-[19.24388rem] h-[2.144rem] font-inter text-[0.8125rem] font-medium flex-shrink-0 rounded-[0.59013rem] bg-[#EEF2F5] border border-gray-300 p-2"
              >
                {clients.map((client) => (
                  <option key={client.id} value={client.client}>
                    {client.client}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="text-left mr-8 w-[6rem] text-[#8C8C8C] font-inter text-[0.8125rem] font-medium"
                htmlFor="bot"
              >
                Bot Name
              </label>
              <input
                type="text"
                name="bot"
                id="bot"
                value={formData.bot}
                onChange={handleChange}
                className="w-[19.24388rem] h-[2.144rem] font-inter text-[0.8125rem] font-medium flex-shrink-0 rounded-[0.59013rem] bg-[#EEF2F5] border border-gray-300 p-2"
              />
            </div>
            <div
              className="mt-6 flex flex-col justify-center items-center border-dashed border-2 border-customBlue p-2 rounded-md cursor-pointer overflow-y-auto custom-scrollbar"
              onClick={handleFileUploadClick}
              style={{ maxHeight: "7.25rem" }}
            >
              {isFileUploaded ? (
                <>
                  <div className="bg-customBlue text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ✓
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-[#000] text-[0.875rem] font-poppins font-semibold">
                      Uploaded Files:
                    </p>
                    <p className="text-[#646464] text-[0.75rem] font-poppins font-normal">
                      {uploadedFiles.join(", ")}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={imagesPath.KnowledgeBase.uploadIcon}
                    alt="Upload"
                    className="w-8 h-8 mb-4"
                  />
                  <span className="text-[#000] text-[0.875rem] font-poppins font-semibold">
                    Click to upload a file or drag and drop it here
                  </span>
                  <span className="text-[#646464] text-[0.75rem] font-poppins font-normal mt-1">
                    Up to 1GB in size. PDF, DOC, DOCX, TXT
                  </span>
                </>
              )}
              <input
                id="fileUpload"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="font-poppinsRegular text-[0.84863rem] bg-blue-500 text-white px-6 py-2 rounded-full"
                disabled={isTraining}
              >
                {isEditMode ? "Upload & Train" : "Upload & Train"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBaseModal;
