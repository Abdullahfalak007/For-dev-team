// import React, { useState } from "react";
// import Side from "../components/Side";
// import Footer from "../components/Footer";

// const OTP = () => {
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleChange = (index, value) => {
//     if (/^\d*$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < 3) {
//         document.getElementById(`otp-${index + 1}`).focus();
//       }
//     }
//   };

//   const verifyOtp = (e) => {
//     e.preventDefault();
//     if (otp.join("") === "1234") {
//       alert("OTP Verified");
//       window.location.href = "/reset-password";
//     } else {
//       alert("Invalid OTP");
//     }
//   };

//   return (
//     <>
//       <div className="flex min-h-screen w-full">
//         <Side />
//         <div className="flex flex-col justify-center items-start w-full md:w-[45%] px-2 md:px-8 lg:px-16">
//           <h2 className="text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter text-left w-full">
//             Enter the 4-digit Code
//           </h2>
//           <p className="mb-4 text-left w-full text-[#9F9F9F] font-inter text-[1rem] font-normal leading-normal">
//             Enter the 4 digits code that you received on your email.
//           </p>
//           <form
//             className="flex space-x-4 w-[513px] ml-8 m-x-auto mb-4"
//             onSubmit={verifyOtp}
//           >
//             {otp.map((_, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 id={`otp-${index}`}
//                 value={otp[index]}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 maxLength="1"
//                 className="w-[5rem] h-[5rem] text-center rounded-[1.25rem] border border-[#CCC] bg-white ml-[-2.5rem] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             ))}
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default OTP;

import React, { useState } from "react";
import Side from "../components/Side";
import Footer from "../components/Footer";

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    if (otp.join("") === "1234") {
      alert("OTP Verified");
      window.location.href = "/reset-password";
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Side />
        <div className="flex flex-col justify-center items-start w-full md:w-[45%] px-2 md:px-8 lg:px-16">
          <h2 className="text-[1.5rem] font-bold mb-4 text-[#0771EF] font-inter text-left w-full">
            Enter the 4-digit Code
          </h2>
          <p className="mb-4 text-left w-full text-[#9F9F9F] font-inter text-[1rem] font-normal leading-normal">
            Enter the 4 digits code that you received on your email.
          </p>
          <form
            className="flex space-x-4 w-[513px] ml-8 m-x-auto mb-4"
            onSubmit={verifyOtp}
          >
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                id={`otp-${index}`}
                value={otp[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                maxLength="1"
                className="w-[5rem] h-[5rem] text-center rounded-[1.25rem] border border-[#CCC] bg-white ml-[-2.5rem] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OTP;
