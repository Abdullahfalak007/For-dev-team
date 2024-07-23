import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import VirtualAssistantForAdminComponent from "../components/VirtualAssistantForAdminComponent";

const VirtualAssistantPageForAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    virtualAssistant: "",
    email: "",
    number: "",
    client: "",
    bot: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const openModal = (assistant = null) => {
    if (assistant) {
      setFormData(assistant);
      setIsEditMode(true);
    } else {
      setFormData({
        id: null,
        virtualAssistant: "",
        email: "",
        number: "",
        client: "",
        bot: "",
      });
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
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar
          title="Virtual Assistants"
          showAddIcon={true}
          showSearchBar={true}
          openAddModal={() => openModal()}
        />
        <div className="p-4 flex-1 overflow-auto">
          <VirtualAssistantForAdminComponent
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

export default VirtualAssistantPageForAdmin;
