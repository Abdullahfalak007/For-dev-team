import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SuperAdminSidebar from "../components/SuperAdminSidebar";
import VirtualAssistants from "../components/VirtualAssistants";

const VirtualAssistantsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const openModal = (assistant = null) => {
    if (assistant) {
      setFormData(assistant);
      setIsEditMode(true);
    } else {
      setFormData({ id: null, name: "", number: "", email: "", password: "" });
      setIsEditMode(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveAssistant = () => {
    // Save logic goes here
  };

  return (
    <div className="flex min-h-screen w-full">
      <SuperAdminSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar
          title="Virtual Assistants"
          showAddIcon={true}
          showSearchBar={true}
          openAddModal={() => openModal()}
        />
        <div className="p-4 flex-1 overflow-auto">
          <VirtualAssistants
            openModal={openModal}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            saveAssistant={saveAssistant}
            formData={formData}
            setFormData={setFormData}
            isEditMode={isEditMode}
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistantsPage;
