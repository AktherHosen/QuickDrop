import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 sm:px-4 lg:px-2 my-6 lg:my-4">
      {children}
    </div>
  );
};

export default Container;
