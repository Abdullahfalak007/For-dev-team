import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import Clients from "../components/Clients";
import ClientModal from "../components/ClientModal";

const ClientsPageForAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    client: "",
    representative: "",
    email: "",
    phone: "",
    location: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const openModal = (client = null) => {
    if (client) {
      setFormData(client);
      setIsEditMode(true);
    } else {
      setFormData({
        id: null,
        client: "",
        representative: "",
        email: "",
        phone: "",
        location: "",
      });
      setIsEditMode(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveClient = () => {
    // Save logic goes here
  };

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <Navbar
          title="Clients"
          showAddIcon={true}
          showSearchBar={true}
          openAddModal={() => openModal()}
        />
        <div className="p-4 flex-1 overflow-auto">
          <Clients
            openModal={openModal}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            saveClient={saveClient}
            formData={formData}
            setFormData={setFormData}
            isEditMode={isEditMode}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsPageForAdmin;
