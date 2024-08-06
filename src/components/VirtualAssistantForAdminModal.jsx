// src/components/VirtualAssistantForAdminModal.jsx
import React, { useRef, useEffect, useState } from "react";
import FormField from "./FormField";
import { useSelector, useDispatch } from "react-redux";
import { fetchClients } from "../store/thunks/clientsThunk"; // Assuming you have a thunk for fetching clients
import "../index.css";

const VirtualAssistantForAdminModal = ({
  isOpen,
  onClose,
  onSave,
  formData,
  setFormData,
  isEditMode,
}) => {
  const modalRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const dispatch = useDispatch();

  const clientsData = useSelector((state) => state.clients.identifier);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchClients()); // Fetch clients when modal is opened
    }
  }, [dispatch, isOpen]);

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

  const handleSave = () => {
    const { name, email, phoneNumber, bot, client } = formData;
    const payload = {
      name,
      email,
      phoneNumber,
      bot,
      client: client ? client.id : null, // Only send the client ID
    };
    onSave(payload);
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
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client
            </label>
            <select
              name="client"
              value={formData.client?.id || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  client: e.target.value,

                  // client: {
                  //   id: e.target.value,
                  //   name:
                  //     clientsData.find((client) => client.id === e.target.value)
                  //       ?.name || "",
                  // },
                })
              }
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" disabled>
                Select Client
              </option>
              {clientsData.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          <FormField
            label="Bot"
            type="text"
            name="bot"
            value={formData.bot}
            onChange={handleChange}
          />
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSave}
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

export default VirtualAssistantForAdminModal;
