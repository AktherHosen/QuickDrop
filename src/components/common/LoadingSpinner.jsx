import { BounceLoader } from "react-spinners";

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
        flex 
        flex-col 
        justify-center 
        items-center `}
    >
      <BounceLoader size={40} color="#5c8fdc" />
    </div>
  );
};

export default LoadingSpinner;
