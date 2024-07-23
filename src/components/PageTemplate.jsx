// import React from "react";
// import Footer from "../components/Footer";
// import Side from "../components/Side";
// import InputField from "../components/InputField";

// const PageTemplate = ({
//   title,
//   description,
//   fields,
//   buttonText,
//   onSubmit,
//   alignCenter = true,
//   additionalContent,
// }) => (
//   <>
//     <div className="flex min-h-screen w-full">
//       <Side />
//       <div
//         className={`flex flex-col justify-center ${
//           alignCenter ? "items-center" : "items-start"
//         } w-full md:w-[45%] px-2 md:px-8 lg:px-16`}
//       >
//         <h2
//           className={`text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter ${
//             alignCenter ? "text-center" : "text-left"
//           } w-full`}
//         >
//           {title}
//         </h2>
//         {description && (
//           <p
//             className={`mb-4 ${
//               alignCenter ? "text-center" : "text-left"
//             } w-full`}
//           >
//             {description}
//           </p>
//         )}
//         <form className="space-y-4" onSubmit={onSubmit}>
//           {fields.map(
//             ({ label, type, id, placeholder, required, children }) => (
//               <InputField
//                 key={id}
//                 label={label}
//                 type={type}
//                 id={id}
//                 placeholder={placeholder}
//                 required={required}
//               >
//                 {children}
//               </InputField>
//             )
//           )}
//           {additionalContent}
//           {buttonText && (
//             <button
//               type="submit"
//               className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] bg-gradient-to-r from-[#0964F8] to-[#02B4FE] shadow-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {buttonText}
//             </button>
//           )}
//         </form>
//       </div>
//     </div>
//     <Footer />
//   </>
// );

// export default PageTemplate;
