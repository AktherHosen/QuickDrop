import React from "react";

const Container = ({ children }) => {
  return (
    <section className="max-w-[1240px] min-h-[400px] mx-auto px-6 sm:px-5 lg:px-4 my-6 lg:my-4">
      {children}
    </section>
  );
};

export default Container;
