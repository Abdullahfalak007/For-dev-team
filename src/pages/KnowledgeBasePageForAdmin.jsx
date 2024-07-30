// import React, { useState } from "react";
// import AdminSidebar from "../components/AdminSidebar";
// import Navbar from "../components/Navbar";
// import KnowledgeBaseCard from "../components/KnowledgeBaseCard";
// import KnowledgeBaseModal from "../components/KnowledgeBaseModal";
// import knowledgeBaseData from "../data/knowledgeBaseData.json"; // Sample data
// import clientsData from "../data/clientsData.json"; // Clients data

// const KnowledgeBasePageForAdmin = () => {
//   const [data, setData] = useState(knowledgeBaseData);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     id: null,
//     client: "",
//     bot: "",
//     dateCreated: "",
//     documents: [],
//   });
//   const [isEditMode, setIsEditMode] = useState(false);

//   const openModal = (item = null) => {
//     if (item) {
//       setFormData(item);
//       setIsEditMode(true);
//     } else {
//       setFormData({
//         id: null,
//         client: "",
//         bot: "",
//         dateCreated: "",
//         documents: [],
//       });
//       setIsEditMode(false);
//     }
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const saveItem = (newItem) => {
//     if (isEditMode) {
//       setData(data.map((item) => (item.id === newItem.id ? newItem : item)));
//     } else {
//       newItem.id = data.length + 1; // Simple ID generation logic
//       newItem.dateCreated = new Date().toLocaleDateString(); // Set current date
//       setData([...data, newItem]);
//     }
//     // We no longer close the modal here to allow for training simulation
//   };

//   const deleteItem = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="flex min-h-screen w-full">
//       <AdminSidebar className="h-full" />
//       <div className="flex-1 flex flex-col">
//         <div className="w-full">
//           <Navbar
//             title="Knowledge Base"
//             showAddIcon={true}
//             showSearchBar={true}
//             searchBarPlaceholder="Search Company"
//             openAddModal={() => openModal()}
//             showClientDropdown={true}
//             clients={clientsData}
//           />
//         </div>
//         <div className="flex-1 p-4 grid grid-cols-3 gap-4">
//           {data.map((item) => (
//             <KnowledgeBaseCard
//               key={item.id}
//               {...item}
//               onEdit={() => openModal(item)}
//               onDelete={() => deleteItem(item.id)}
//             />
//           ))}
//         </div>
//       </div>
//       <KnowledgeBaseModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         onSave={saveItem}
//         formData={formData}
//         setFormData={setFormData}
//         isEditMode={isEditMode}
//         clients={clientsData}
//       />
//     </div>
//   );
// };

// export default KnowledgeBasePageForAdmin;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKnowledgebase } from "../store/thunks/knowledgebaseThunk";
import { fetchClients } from "../store/thunks/clientsThunk";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbar";
import KnowledgeBaseCard from "../components/KnowledgeBaseCard";
import KnowledgeBaseModal from "../components/KnowledgeBaseModal";
import "../index.css";

const KnowledgeBasePageForAdmin = () => {
  const dispatch = useDispatch();
  const knowledgebase =
    useSelector((state) => state.knowledgebase.identifier) || [];
  const knowledgebaseStatus = useSelector(
    (state) => state.knowledgebase.status
  );
  const clients = useSelector((state) => state.clients.identifier) || [];
  const clientsStatus = useSelector((state) => state.clients.status);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    client: "",
    bot: "",
    dateCreated: "",
    documents: [],
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (knowledgebaseStatus === "idle") {
      dispatch(fetchKnowledgebase());
    }
    if (clientsStatus === "idle") {
      dispatch(fetchClients());
    }
  }, [knowledgebaseStatus, clientsStatus, dispatch]);

  const openModal = (item = null) => {
    if (item) {
      setFormData(item);
      setIsEditMode(true);
    } else {
      setFormData({
        id: null,
        client: "",
        bot: "",
        dateCreated: "",
        documents: [],
      });
      setIsEditMode(false);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveItem = (newItem) => {
    // Implement save logic with API if needed
    if (isEditMode) {
      // Update logic with API if needed
    } else {
      newItem.id = knowledgebase.length + 1; // Simple ID generation logic
      newItem.dateCreated = new Date().toLocaleDateString(); // Set current date
      // Add new item to state (or update via API)
    }
  };

  const deleteItem = (id) => {
    // Implement delete logic with API if needed
  };

  return (
    <div className="flex min-h-screen w-full">
      <AdminSidebar className="h-full" />
      <div className="flex-1 flex flex-col">
        <div className="w-full">
          <Navbar
            title="Knowledge Base"
            showAddIcon={true}
            showSearchBar={true}
            searchBarPlaceholder="Search Company"
            openAddModal={() => openModal()}
            showClientDropdown={true}
            clients={clients}
          />
        </div>
        <div className="flex-1 p-4 grid grid-cols-3 gap-4">
          {knowledgebaseStatus === "loading" || clientsStatus === "loading" ? (
            <div>Loading...</div>
          ) : knowledgebaseStatus === "failed" || clientsStatus === "failed" ? (
            <div>Failed to load data.</div>
          ) : (
            knowledgebase.map((item) => (
              <KnowledgeBaseCard
                key={item.id}
                {...item}
                onEdit={() => openModal(item)}
                onDelete={() => deleteItem(item.id)}
              />
            ))
          )}
        </div>
      </div>
      <KnowledgeBaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveItem}
        formData={formData}
        setFormData={setFormData}
        isEditMode={isEditMode}
        clients={clients}
      />
    </div>
  );
};

export default KnowledgeBasePageForAdmin;
