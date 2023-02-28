import React from "react";

import BlogBox from "../Components/BlogBox";
import Top from "../Components/GoTop";
import Pagination from "../Components/Pagination";

const PageNotFound = () => {
  return (
    <div>
      <Top />
      <div className="wrapper blog-bg relative bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-bannerGradient -z-10"></div>
        <section className="contain flex-col gap-6 justify-center h-80 sm:h-96 items-center">
          <h1 className="banner-heading">404 NotFound</h1>
        </section>
      </div>
    </div>
  );
};

export default PageNotFound;