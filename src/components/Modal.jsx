import React, { useRef, useEffect, useState } from "react";
import imagesPath from "../data/imagesPath.json";
import FormField from "./FormField";
import "../index.css";

const Modal = ({
  isOpen,
  onClose,
  onSave,
  formData,
  setFormData,
  isEditMode,
}) => {
  const modalRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
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
              <span className="absolute font-poppinsMedium text-[0.71231rem] font-semibold top-[8rem] ">
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
            {isEditMode
              ? "Edit Virtual Assistant"
              : "Add New Virtual Assistant"}
          </h2>
        </div>
        <form className="px-8 pt-12">
          <FormField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormField
            label="Number"
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          <FormField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onSave}
              className="bg-blue-500 text-white px-6 py-2 rounded-full mr-2"
            >
              {isEditMode ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
