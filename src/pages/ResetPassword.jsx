// import React, { useState } from "react";
// import imagesPath from "../data/imagesPath.json";
// import Side from "../components/Side";
// import Footer from "../components/Footer";
// import InputField from "../components/InputField";

// const ResetPassword = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <>
//       <div className="flex min-h-screen w-full">
//         <Side />
//         <div className="flex flex-col justify-center items-start w-full md:w-[45%] px-2 md:px-8 lg:px-16">
//           <h2 className="text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter text-left w-full">
//             Reset Password
//           </h2>
//           <p className="mb-4 text-left w-full text-[#9F9F9F] font-inter text-[1rem] font-normal leading-normal">
//             set the new password for your account so you can login and access
//             all the features
//           </p>
//           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//             <InputField
//               label="New Password"
//               type={showPassword ? "text" : "password"}
//               id="new-password"
//               placeholder="New Password"
//               required
//               children={
//                 <img
//                   src={imagesPath.Signup.eyeIcon}
//                   alt="Show/Hide Password"
//                   className="absolute right-3 top-[3.5rem] cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 />
//               }
//             />
//             <InputField
//               label="Confirm Password"
//               type={showPassword ? "text" : "password"}
//               id="confirm-password"
//               placeholder="Confirm Password"
//               required
//               children={
//                 <img
//                   src={imagesPath.Signup.eyeIcon}
//                   alt="Show/Hide Password"
//                   className="absolute right-3 top-[3.5rem] cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 />
//               }
//             />
//             <button
//               type="submit"
//               className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] bg-gradient-to-r from-[#0964F8] to-[#02B4FE] shadow-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Update
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ResetPassword;

import React, { useState } from "react";
import imagesPath from "../data/imagesPath.json";
import Side from "../components/Side";
import Footer from "../components/Footer";
import InputField from "../components/InputField";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Side />
        <div className="flex flex-col justify-center items-start w-full md:w-[45%] px-2 md:px-8 lg:px-16">
          <h2 className="text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter text-left w-full">
            Reset Password
          </h2>
          <p className="mb-4 text-left w-full text-[#9F9F9F] font-inter text-[1rem] font-normal leading-normal">
            Set the new password for your account so you can login and access
            all the features.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <InputField
              label="New Password"
              type={showPassword ? "text" : "password"}
              id="new-password"
              placeholder="New Password"
              required
              children={
                <img
                  src={imagesPath.Signup.eyeIcon}
                  alt="Show/Hide Password"
                  className="absolute right-3 top-[3.5rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              }
            />
            <InputField
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm Password"
              required
              children={
                <img
                  src={imagesPath.Signup.eyeIcon}
                  alt="Show/Hide Password"
                  className="absolute right-3 top-[3.5rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              }
            />
            <button
              type="submit"
              className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] bg-gradient-to-r from-[#0964F8] to-[#02B4FE] shadow-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
