import React from "react";

const Heading = ({ title, small }) => {
  return (
    <div>
      <h1
        className={`${
          small ? "text-[16px] text-start" : "text-2xl text-center"
        } font-semibold capitalize my-2 text-gray-800`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
