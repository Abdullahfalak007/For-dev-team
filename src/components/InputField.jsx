import React from "react";

const InputField = ({ label, type, id, placeholder, required, children }) => (
  <div className="relative">
    <label
      className="block text-sm font-medium mb-[0.87rem] text-[#484848] font-inter"
      htmlFor={id}
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      className="w-[32.8125rem] h-[3.8125rem] rounded-[1.25rem] border border-[#CCC] bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      id={id}
      placeholder={placeholder}
      required={required}
    />
    {children}
  </div>
);

export default InputField;
