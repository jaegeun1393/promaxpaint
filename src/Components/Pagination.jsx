import { Link } from "react-router-dom";
import { useState } from "react";

const Pagination = ({ pageCount }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (index) => {
    setSelectedPage(index + 1);
  };

  return (
    <>
      {[...Array(pageCount)].map((e, index) => (
        <Link to={`/blog/article/${index + 1}`} key={index}>
          <div
            className={`w-10 h-10 sm:w-14 sm:h-14 font-poppins shadow-pagination text-base sm:text-lg font-medium grid place-items-center rounded-lg cursor-pointer duration-100 ${
              index + 1 === selectedPage
                ? "bg-bannerGradient text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => handlePageClick(index)}
          >
            {index + 1}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Pagination;