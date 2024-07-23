// src/components/FormField.jsx
import React from "react";

const FormField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="mb-4 flex items-center">
      <label
        className="text-left mr-8 w-[6rem] text-[#8C8C8C] font-inter text-[0.8125rem] font-medium"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-[19.24388rem] h-[2.144rem] flex-shrink-0 rounded-[0.59013rem] bg-[#EEF2F5] border border-gray-300 p-2"
      />
    </div>
  );
};

export default FormField;
