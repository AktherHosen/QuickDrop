import React from "react";

const Button = ({ label, isPrimary, isSmall }) => {
  return (
    <button
      className={`px-4 py-1.5 rounded-sm cursor-pointer  block
    
      ${
        isPrimary
          ? "bg-primary text-white font-normal"
          : "bg-secondary text-black font-normal"
      }
      ${isSmall ? "text-sm" : "text-lg"}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
