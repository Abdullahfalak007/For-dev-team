// import React, { useRef, useEffect, useState } from "react";
// import imagesPath from "../data/imagesPath.json";
// import FormField from "./FormField";
// import virtualAssistantsData from "../data/virtualAssistantsData.json";
// import clientsData from "../data/clientsData.json";
// import "../index.css";

// const VirtualAssistantForAdminModal = ({
//   isOpen,
//   onClose,
//   onSave,
//   formData,
//   setFormData,
//   isEditMode,
// }) => {
//   const modalRef = useRef(null);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       onClose();
//     }
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUploadedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
//       <div
//         ref={modalRef}
//         className="relative bg-white flex-shrink-0 w-[34.625rem] h-[36.375rem] rounded-[1.81856rem]"
//       >
//         <div className="bg-customBlue rounded-t-lg flex items-center justify-center relative h-[5.20994rem] rounded-t-[1.81856rem]">
//           {!uploadedImage ? (
//             <>
//               <img
//                 src={imagesPath.Modal.uploadIconBg}
//                 alt="Background"
//                 className="absolute w-[11rem] h-[10.07588rem] top-10 cursor-pointer"
//                 onClick={() => document.getElementById("imageUpload").click()}
//               />
//               <img
//                 src={imagesPath.Modal.uploadIcon}
//                 alt="Icon"
//                 className="absolute w-[1.73613rem] h-[1.5625rem] top-[6rem]"
//               />
//               <span className="absolute font-poppinsMedium text-[0.71231rem] font-semibold top-[8rem] ">
//                 Upload Profile
//               </span>
//             </>
//           ) : (
//             <img
//               src={uploadedImage}
//               alt="Uploaded"
//               className="absolute w-[11rem] h-[10.07588rem] top-10 rounded-full"
//             />
//           )}
//           <input
//             id="imageUpload"
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={handleImageUpload}
//           />
//         </div>
//         <div className="text-center mt-32">
//           <h2 className="text-[1.22875rem] font-medium text-black font-poppinsMedium">
//             {isEditMode
//               ? "Edit Virtual Assistant"
//               : "Add New Virtual Assistant"}
//           </h2>
//         </div>
//         <form className="px-8 pt-12">
//           <div className="mb-4 flex items-center">
//             <label
//               className="text-left mr-8 w-[6rem] text-[#8C8C8C] font-inter text-[0.8125rem] font-medium"
//               htmlFor="virtualAssistant"
//             >
//               Virtual Assistant
//             </label>
//             <select
//               name="virtualAssistant"
//               id="virtualAssistant"
//               value={formData.virtualAssistant}
//               onChange={handleChange}
//               className="w-[19.24388rem] h-[2.144rem] flex-shrink-0 rounded-[0.59013rem] bg-[#EEF2F5] border border-gray-300 p-2"
//             >
//               <option value="">Select Virtual Assistant</option>
//               {virtualAssistantsData.map((assistant) => (
//                 <option key={assistant.id} value={assistant.virtualAssistant}>
//                   {assistant.virtualAssistant}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {isEditMode && (
//             <div className="mb-4 flex items-center">
//               <label
//                 className="text-left mr-8 w-[6rem] text-[#8C8C8C] font-inter text-[0.8125rem] font-medium"
//                 htmlFor="client"
//               >
//                 Client
//               </label>
//               <select
//                 name="client"
//                 id="client"
//                 value={formData.client}
//                 onChange={handleChange}
//                 className="w-[19.24388rem] h-[2.144rem] flex-shrink-0 rounded-[0.59013rem] bg-[#EEF2F5] border border-gray-300 p-2"
//               >
//                 <option value="">Select Client</option>
//                 {clientsData.map((client) => (
//                   <option key={client.id} value={client.client}>
//                     {client.client}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}
//           <FormField
//             label="Bot Name"
//             type="text"
//             name="bot"
//             value={formData.bot}
//             onChange={handleChange}
//           />
//           <div className="flex justify-center">
//             <button
//               type="button"
//               onClick={onSave}
//               className="bg-blue-500 text-white px-6 py-2 rounded-full mr-2"
//             >
//               {isEditMode ? "Save" : "Add"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VirtualAssistantForAdminModal;

import React, { useRef, useEffect, useState } from "react";
import imagesPath from "../data/imagesPath.json";
import FormField from "./FormField";
import virtualAssistantsData from "../data/virtualAssistantsData.json";
import clientsData from "../data/clientsData.json";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVirtualAssistantChange = (e) => {
    const selectedAssistant = virtualAssistantsData.find(
      (assistant) => assistant.virtualAssistant === e.target.value
    );

    if (selectedAssistant) {
      setFormData({
        ...formData,
        virtualAssistant: selectedAssistant.virtualAssistant,
        email: selectedAssistant.email,
        number: selectedAssistant.number,
        client: selectedAssistant.client,
        id: selectedAssistant.id,
      });
    } else {
      setFormData({
        ...formData,
        virtualAssistant: e.target.value,
        email: "",
        number: "",
        client: "",
        id: null,
      });
    }
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
          <div className="mb-4 flex items-center">
            <label
              className="text-left mr-8 w-[6rem] text-[#8C8C8C] font-inter text-[0.8125rem] font-medium"
              htmlFor="virtualAssistant"
            >
              Virtual Assistant
            </label>
            <select
              name="virtualAssistant"
              id="virtualAssistant"
              value={formData.virtualAssistant}
              onChange={handleVirtualAssistantChange}
              className="w-[19.24388rem] h-[2.144rem] flex-shrink-0 rounded-[0.59013rem] bg-[#EEF2F5] border border-gray-300 p-2"
            >
              <option value="">Select Virtual Assistant</option>
              {virtualAssistantsData.map((assistant) => (
                <option key={assistant.id} value={assistant.virtualAssistant}>
                  {assistant.virtualAssistant}
                </option>
              ))}
            </select>
          </div>
          {isEditMode && (
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
                className="w-[19.24388rem] h-[2.144rem] flex-shrink-0 rounded-[0.59013rem] bg-[#EEF2F5] border border-gray-300 p-2"
              >
                <option value="">Select Client</option>
                {clientsData.map((client) => (
                  <option key={client.id} value={client.client}>
                    {client.client}
                  </option>
                ))}
              </select>
            </div>
          )}
          <FormField
            label="Bot Name"
            type="text"
            name="bot"
            value={formData.bot}
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

export default VirtualAssistantForAdminModal;
