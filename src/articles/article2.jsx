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

const Article_2 = () => {
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
                src="/assets/blog/blog2.png"
                alt="interior design"
                className="pb-8"
              />
              <p className="text-blogPara font-poppins">
              When it comes to home improvement projects, painting is often at the top of the list. Not only can it improve the appearance of a space, but it can also provide protection for surfaces against damage caused by weather, moisture, and other environmental factors.
One of the most noticeable benefits of painting is the improvement in appearance. A fresh coat of paint can give any space an instant facelift, making it look brighter, cleaner, and more inviting. This can be especially important if you're looking to sell your home or attract potential tenants to a rental property. A well-painted space can leave a lasting impression on anyone who enters.
<br/> <br/> <br/>
              </p>
              <p className="text-blogPara font-poppins">
              However, painting isn't just about aesthetics. It can also provide protection for surfaces against various environmental factors. For example, exterior surfaces are constantly exposed to harsh weather conditions such as rain, snow, and sunlight, which can cause damage over time. A quality paint job can help protect these surfaces by providing a barrier that prevents moisture from seeping in and causing rot, warping, or cracking. Paint can also help protect against UV rays, which can fade and damage surfaces over time.
Similarly, interior surfaces can also benefit from paint's protective qualities. High humidity areas such as bathrooms and kitchens can be prone to mold and mildew growth, which can damage surfaces and create health hazards. Choosing a high-quality paint that is specifically formulated for these areas can help prevent mold growth and make cleaning easier.
<br/> <br/> <br/>
              </p>
              <p className="text-blogPara font-poppins">
              In addition to protecting against damage, paint can also help preserve surfaces and extend their lifespan. For example, a well-maintained paint job on wooden surfaces can help prevent rot and deterioration, keeping them looking beautiful and functional for years to come.
In conclusion, painting can provide both aesthetic and protective benefits for a space. From improving the appearance of a room to protecting surfaces against damage caused by weather and moisture, painting is a valuable investment for any homeowner or property manager.
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

export default Article_2;