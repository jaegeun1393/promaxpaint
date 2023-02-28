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

const Article_3 = () => {
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
              Paint can help protect surfaces from damage caused by weather, moisture, and other environmental factors.
              </h2>
              <div className="text-blogPara text-base sm:text-lg pt-3">
                Feb 29, 2023
              </div>
            </div>

            <div>
              <img
                src="/assets/blog/blog3.png"
                alt="interior design"
                className="pb-8"
              />
              <p className="text-blogPara font-poppins">
              High-quality paint not only looks great but can also provide long-lasting protection for your surfaces. With the right type of paint and proper application, your paint job can withstand years of wear and tear, protecting your surfaces from damage caused by weather, moisture, and other environmental factors. In addition to improving the appearance of a space, a high-quality paint job can also help to extend the life of your surfaces, reducing the need for costly repairs or replacements in the future.


When choosing paint for your space, it's important to select a product that is specifically designed for the surface you will be painting, whether it's interior or exterior walls, trim, or other features. Different surfaces require different types of paint, so it's important to choose a product that is formulated to provide the necessary protection and durability.

<br/> <br/> <br/>
              </p>
              <p className="text-blogPara font-poppins">
              Proper application is also key to ensuring that your paint job provides maximum protection. This includes preparing the surface properly, using the right tools and techniques, and applying the appropriate number of coats. A professional painter can ensure that your paint job is applied correctly, providing a durable finish that will stand up to the elements for years to come.


Overall, investing in a high-quality paint job can provide numerous benefits, including improved appearance, increased durability, and protection against damage. By choosing the right paint and ensuring proper application, you can enjoy the benefits of a beautiful and long-lasting paint job for years to come.

<br/> <br/> <br/>
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

export default Article_3;