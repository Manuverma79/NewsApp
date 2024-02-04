import { useRef } from "react";

const SubHeading = ({ onSearch }) => {
  const searchKeyword = useRef();
  const searchClicked = (event) => {
    const keyword = searchKeyword.current.value;
    onSearch(keyword);
  };
  return (
    <div className="items-center w-full py-16 text-center bg-secondary h-1/4">
      <h2 className="m-0 py-4 text-3xl md:text-[40px] uppercase font-heading font-normal tracking-[0.14em] text-text">
        news that keeps you up to date!
      </h2>
      <div className="flex flex-row items-center justify-center gap-3">
        <input
          ref={searchKeyword}
          type="search"
          placeholder="eg. Weather"
          className="w-4/12 h-10 px-4 text-xl font-semibold border-4 border-solid font-description rounded-3xl border-main"
        />
        <button
          onClick={searchClicked}
          className="items-center h-10 pt-1 border-4 border-solid rounded-10xl bg-light border-main "
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.85433 0.629333 11.113 1.888C12.3717 3.14667 13.0007 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C11 5.25 10.5627 4.18767 9.688 3.313C8.81333 2.43833 7.75067 2.00067 6.5 2C5.25 2 4.18767 2.43767 3.313 3.313C2.43833 4.18833 2.00067 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z"
              fill="#12372A"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SubHeading;
