const Button = ({ label, isPrimary }) => {
  return (
    <button
      className={`block rounded-sm cursor-pointer font-normal 
        px-2 py-1.5 text-[1rem] 
        sm:px-3 sm:py-1 sm:text-base 
        md:px-4 md:py-1.5 md:text-lg 
        dark:bg-darkBg dark:text-darkText border dark:border-gray-500 dark:hover:bg-primary
        ${isPrimary ? "bg-primary text-white" : "bg-secondary text-black"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
