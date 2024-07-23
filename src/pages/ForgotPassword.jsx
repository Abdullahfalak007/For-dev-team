// import React from "react";
// import Side from "../components/Side";
// import Footer from "../components/Footer";
// import InputField from "../components/InputField";

// const ForgotPassword = () => {
//   return (
//     <>
//       <div className="flex min-h-screen w-full">
//         <Side />
//         <div className="flex flex-col justify-center items-start w-full md:w-[45%] px-2 md:px-8 lg:px-16">
//           <h2 className="text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter text-left w-full">
//             Forgot Password?
//           </h2>
//           <p className="mb-4 text-left w-full text-[#9F9F9F] font-inter text-[1rem] font-normal leading-normal">
//             Enter your email for the verification proccess , we will send 4
//             digits code to your email
//           </p>
//           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//             <InputField
//               label="Email"
//               type="email"
//               id="email"
//               placeholder="Email"
//               required
//             />
//             <button
//               type="submit"
//               className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] bg-gradient-to-r from-[#0964F8] to-[#02B4FE] shadow-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Send OTP
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ForgotPassword;

import React from "react";
import Side from "../components/Side";
import Footer from "../components/Footer";
import InputField from "../components/InputField";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Side />
        <div className="flex flex-col justify-center items-start w-full md:w-[45%] px-2 md:px-8 lg:px-16">
          <h2 className="text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter text-left w-full">
            Forgot Password?
          </h2>
          <p className="mb-4 text-left w-full text-[#9F9F9F] font-inter text-[1rem] font-normal leading-normal">
            Enter your email for the verification process, we will send a
            4-digit code to your email.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <InputField
              label="Email"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
            <button
              type="submit"
              className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] bg-gradient-to-r from-[#0964F8] to-[#02B4FE] shadow-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
