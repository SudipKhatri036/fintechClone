import React from "react";

function ButtonMain({ btnTxt }) {
  return (
    <button
      type="submit"
      className="before:prime- group relative isolation-auto z-10 flex items-center justify-start gap-2 overflow-hidden rounded-full border-2 border-gray-50 bg-[#191919] px-4 py-1 text-sm text-white shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-red-600 before:transition-all before:duration-700 hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:text-lg lg:font-semibold"
    >
      {btnTxt}
      <svg
        className="h-7 w-7 rotate-45 justify-end rounded-full border border-gray-700 p-2 text-gray-50 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none group-hover:bg-gray-50 md:h-8 md:w-8"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-white group-hover:fill-gray-800"
        ></path>
      </svg>
    </button>
  );
}

export default ButtonMain;
