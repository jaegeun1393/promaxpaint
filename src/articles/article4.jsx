import React from "react";

import BlogBox from "../Components/BlogBox";
import Top from "../Components/GoTop";
import Pagination from "../Components/Pagination";

const blogBoxes = [
  {
    title: "Painting can improve the appearance of a space, making it look more attractive and inviting.",
    img: "/assets/blog/blog2.png",
  },
  {
    title: "High-quality paint can last for years, providing a durable finish that stands up to wear and tear.",
    img: "/assets/blog/blog3.png",
  },
  {
    title: "Painting can increase the value of a property, whether it's a home, a commercial building, or a rental property.",
    img: "/assets/blog/blog4.png",
  },
];

const Article_4 = () => {
  return (
    <div>
      <Top />
      <div className="wrapper blog-bg relative bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-bannerGradient -z-10"></div>
        <section className="contain flex-col gap-6 justify-center h-80 sm:h-96 items-center">
          <h1 className="banner-heading">Blog</h1>
        </section>
      </div>

      <div className="wrapper mt-16">
        <section className="contain flex-col lg:flex-row lg:gap-8 gap-12">
          <div className="flex-1 flex flex-col gap-10">
            <div>
              <h2 className="text-blogTitle text-2xl leading-7 md:text-4xl font-bold md:leading-[50px]">
                Painting can increase the value of a property, whether it's a home, a commercial building, or a rental property.
              </h2>
              <div className="text-blogPara text-base sm:text-lg pt-3">
                Feb 27, 2023
              </div>
            </div>

            <div>
              <img
                src="/assets/blog/blog4.png"
                alt="interior design"
                className="pb-8"
              />
              <p className="text-blogPara font-poppins">
              When it comes to increasing the value of a property, painting is often one of the most cost-effective ways to do so. A fresh coat of paint can help to modernize an outdated property or make a new property feel more complete. This is particularly true for homes that have not been painted in several years or commercial buildings that may be showing signs of wear and tear.


Not only does painting improve the appearance of a property, but it also adds a layer of protection. Paint can help to protect surfaces from damage caused by weather, moisture, and other environmental factors. This can help to prevent structural damage and reduce the need for costly repairs down the road.

                <br /> <br /> <br />
              </p>
              <p className="text-blogPara font-poppins">
              In addition to adding value and protection, painting can also help to create a more comfortable living or working environment. For example, light-colored paint can help to reflect natural light, making a space feel brighter and more open. Darker colors can create a more cozy and intimate atmosphere. Choosing the right colors can help to set the tone for a space and create the desired mood.


Overall, painting is a worthwhile investment for any property owner. Whether you're looking to improve the appearance, add protection, or increase the value of your property, a fresh coat of paint can go a long way. With the help of a professional painting contractor, you can ensure that the job is done right, using high-quality materials that will stand the test of time.

                <br /> <br /> <br />
              </p>

            </div>
          </div>

          <div className="w-full lg:w-80 flex flex-col gap-6">
            <div className="lg:mx-0 mx-auto">
              <h2 className="text-blogTitle text-2xl font-bold">
                Recent Event
              </h2>
              <div className="w-24 h-0.5 bg-blogTitle mx-auto lg:mx-0"></div>
            </div>

            <div className="flex items-center flex-col md:flex-row lg:flex-col gap-10">
              {blogBoxes.map(({ title, img }) => (
                <BlogBox title={title} img={img} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex gap-4 justify-center my-28">
        <Pagination pageCount={4} selectedPage={1} />
      </div>
    </div>
  );
};

export default Article_4;