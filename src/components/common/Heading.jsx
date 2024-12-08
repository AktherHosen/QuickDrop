import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold capitalize my-2 text-center ">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
