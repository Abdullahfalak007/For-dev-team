// import React, { useState } from "react";
// import imagesPath from "../data/imagesPath.json";
// import virtualAssistantsData from "../data/virtualAssistantsData.json";
// import VirtualAssistantForAdminModal from "./VirtualAssistantForAdminModal";

// const VirtualAssistantForAdminComponent = ({
//   openModal,
//   isModalOpen,
//   closeModal,
//   saveAssistant,
//   formData,
//   setFormData,
//   isEditMode,
// }) => {
//   const [data, setData] = useState(virtualAssistantsData);
//   const [sortOrder, setSortOrder] = useState({ key: "", order: "asc" });

//   const sortData = (key) => {
//     const order =
//       sortOrder.key === key && sortOrder.order === "asc" ? "desc" : "asc";
//     const sortedData = [...data].sort((a, b) => {
//       if (a[key] < b[key]) return order === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return order === "asc" ? 1 : -1;
//       return 0;
//     });
//     setData(sortedData);
//     setSortOrder({ key, order });
//   };

//   const deleteEntry = (index) => {
//     const updatedData = data.filter((_, i) => i !== index);
//     setData(updatedData);
//   };

//   const handleSave = () => {
//     if (isEditMode) {
//       const updatedData = data.map((entry) =>
//         entry.id === formData.id ? formData : entry
//       );
//       setData(updatedData);
//     } else {
//       const newEntry = { ...formData, id: data.length + 1 };
//       setData([newEntry, ...data]);
//     }
//     closeModal();
//   };

//   return (
//     <div className="p-4 h-full">
//       <div className="overflow-auto h-full">
//         <table className="min-w-full bg-white border-collapse">
//           <thead className="bg-customBlue text-white sticky top-0 z-10">
//             <tr className="space-x-8">
//               <th className="py-4 px-4 text-center w-12">
//                 <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
//                   <input type="checkbox" className="form-checkbox-header" />
//                 </div>
//               </th>
//               <th className="py-2 px-4 text-center">
//                 <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium ml-[-2rem]">
//                   ID
//                   <div className="ml-2 flex flex-col">
//                     <button
//                       onClick={() => sortData("id")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowUpIcon}
//                         alt="Up"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                     <button
//                       onClick={() => sortData("id")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowDownIcon}
//                         alt="Down"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </th>
//               <th className="py-2 px-4 text-center">
//                 <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
//                   Virtual Assistant
//                   <div className="ml-2 flex flex-col">
//                     <button
//                       onClick={() => sortData("virtualAssistant")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowUpIcon}
//                         alt="Up"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                     <button
//                       onClick={() => sortData("virtualAssistant")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowDownIcon}
//                         alt="Down"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </th>
//               <th className="py-2 px-4 text-center">
//                 <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
//                   Email
//                   <div className="ml-2 flex flex-col">
//                     <button
//                       onClick={() => sortData("email")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowUpIcon}
//                         alt="Up"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                     <button
//                       onClick={() => sortData("email")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowDownIcon}
//                         alt="Down"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </th>
//               <th className="py-2 px-4 text-center">
//                 <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
//                   Number
//                   <div className="ml-2 flex flex-col">
//                     <button
//                       onClick={() => sortData("number")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowUpIcon}
//                         alt="Up"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                     <button
//                       onClick={() => sortData("number")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowDownIcon}
//                         alt="Down"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </th>
//               <th className="py-2 px-4 text-center">
//                 <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
//                   Client
//                   <div className="ml-2 flex flex-col">
//                     <button
//                       onClick={() => sortData("client")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowUpIcon}
//                         alt="Up"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                     <button
//                       onClick={() => sortData("client")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowDownIcon}
//                         alt="Down"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </th>
//               <th className="py-2 px-4 text-center">
//                 <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
//                   Bot
//                   <div className="ml-2 flex flex-col">
//                     <button
//                       onClick={() => sortData("bot")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowUpIcon}
//                         alt="Up"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                     <button
//                       onClick={() => sortData("bot")}
//                       className="focus:outline-none"
//                     >
//                       <img
//                         src={imagesPath.VirtualAssistantTable.arrowDownIcon}
//                         alt="Down"
//                         className="w-3 h-3"
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </th>
//               <th className="py-2 px-4 text-center text-white font-inter text-[0.9375rem] font-medium">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((assistant, index) => (
//               <tr
//                 key={index}
//                 className="border-t border-gray-300 hover:bg-gray-100 text-black font-inter text-[0.875rem] font-normal text-center"
//               >
//                 <td className="py-4 px-4 w-12">
//                   <input type="checkbox" className="form-checkbox" />
//                 </td>
//                 <td className="py-4">{assistant.id}</td>
//                 <td className="py-4 px-4">{assistant.virtualAssistant}</td>
//                 <td className="py-4 px-4">{assistant.email}</td>
//                 <td className="py-4 px-4">{assistant.number}</td>
//                 <td className="py-4 px-4">{assistant.client}</td>
//                 <td className="py-4 px-4">{assistant.bot}</td>
//                 <td className="py-4 px-4 flex justify-center space-x-2">
//                   <button
//                     className="text-red-600 hover:text-red-800"
//                     onClick={() => deleteEntry(index)}
//                   >
//                     <img
//                       src={imagesPath.VirtualAssistantTable.recycleBinIcon}
//                       alt="Delete"
//                       className="w-[0.96356rem] h-[0.96356rem]"
//                     />
//                   </button>
//                   <button
//                     className="text-blue-600 hover:text-blue-800"
//                     onClick={() => openModal(assistant)}
//                   >
//                     <img
//                       src={imagesPath.VirtualAssistantTable.editIcon}
//                       alt="Edit"
//                       className="w-[0.96356rem] h-[0.96356rem]"
//                     />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <VirtualAssistantForAdminModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         onSave={handleSave}
//         formData={formData}
//         setFormData={setFormData}
//         isEditMode={isEditMode}
//       />
//     </div>
//   );
// };

// export default VirtualAssistantForAdminComponent;

import React, { useState } from "react";
import imagesPath from "../data/imagesPath.json";
import virtualAssistantsData from "../data/virtualAssistantsData.json";
import VirtualAssistantForAdminModal from "./VirtualAssistantForAdminModal";

const VirtualAssistantForAdminComponent = ({
  openModal,
  isModalOpen,
  closeModal,
  saveAssistant,
  formData,
  setFormData,
  isEditMode,
}) => {
  const [data, setData] = useState(virtualAssistantsData);
  const [sortOrder, setSortOrder] = useState({ key: "", order: "asc" });

  const sortData = (key) => {
    const order =
      sortOrder.key === key && sortOrder.order === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortOrder({ key, order });
  };

  const deleteEntry = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleSave = () => {
    if (isEditMode) {
      const updatedData = data.map((entry) =>
        entry.id === formData.id ? formData : entry
      );
      setData(updatedData);
    } else {
      const newEntry = { ...formData, id: data.length + 1 };
      setData([newEntry, ...data]);
    }
    closeModal();
  };

  return (
    <div className="p-4 h-full">
      <div className="overflow-auto h-full">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-customBlue text-white sticky top-0 z-10">
            <tr className="space-x-8">
              <th className="py-4 px-4 text-center w-12">
                <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
                  <input type="checkbox" className="form-checkbox-header" />
                </div>
              </th>
              <th className="py-2 px-4 text-center">
                <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium ml-[-2rem]">
                  ID
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("id")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("id")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-center">
                <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
                  Virtual Assistant
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("virtualAssistant")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("virtualAssistant")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-center">
                <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
                  Email
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("email")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("email")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-center">
                <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
                  Number
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("number")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("number")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-center">
                <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
                  Client
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("client")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("client")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-center">
                <div className="flex items-center justify-center text-white font-inter text-[0.9375rem] font-medium">
                  Bot
                  <div className="ml-2 flex flex-col">
                    <button
                      onClick={() => sortData("bot")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowUpIcon}
                        alt="Up"
                        className="w-3 h-3"
                      />
                    </button>
                    <button
                      onClick={() => sortData("bot")}
                      className="focus:outline-none"
                    >
                      <img
                        src={imagesPath.VirtualAssistantTable.arrowDownIcon}
                        alt="Down"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 text-center text-white font-inter text-[0.9375rem] font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((assistant, index) => (
              <tr
                key={index}
                className="border-t border-gray-300 hover:bg-gray-100 text-black font-inter text-[0.875rem] font-normal text-center"
              >
                <td className="py-4 px-4 w-12">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="py-4">{assistant.id}</td>
                <td className="py-4 px-4">{assistant.virtualAssistant}</td>
                <td className="py-4 px-4">{assistant.email}</td>
                <td className="py-4 px-4">{assistant.number}</td>
                <td className="py-4 px-4">{assistant.client}</td>
                <td className="py-4 px-4">{assistant.bot}</td>
                <td className="py-4 px-4 flex justify-center space-x-2">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteEntry(index)}
                  >
                    <img
                      src={imagesPath.VirtualAssistantTable.recycleBinIcon}
                      alt="Delete"
                      className="w-[0.96356rem] h-[0.96356rem]"
                    />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => openModal(assistant)}
                  >
                    <img
                      src={imagesPath.VirtualAssistantTable.editIcon}
                      alt="Edit"
                      className="w-[0.96356rem] h-[0.96356rem]"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <VirtualAssistantForAdminModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        formData={formData}
        setFormData={setFormData}
        isEditMode={isEditMode}
      />
    </div>
  );
};

export default VirtualAssistantForAdminComponent;
