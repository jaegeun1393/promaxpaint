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

const Article_1 = () => {
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
                Feb 28, 2023
              </div>
            </div>

            <div>
              <img
                src="/assets/blog/blog1.png"
                alt="interior design"
                className="pb-8"
              />
              <p className="text-blogPara font-poppins">
              Paint is not just a way to make a surface look nice; it can also help protect it from 
              various environmental factors that can cause damage over time. Whether it's your home, 
              your car, or a piece of outdoor furniture, a fresh coat of paint can provide an extra 
              layer of protection that will help prolong the life of the surface.
              One of the primary environmental factors that can damage surfaces is weather. Sun, rain, 
              wind, and snow can all cause significant damage to surfaces that are not properly protected. 
              For example, if the exterior of your home is not properly painted, it can become susceptible 
              to water damage from rain, snow, and humidity. Over time, this moisture can lead to the growth 
              of mold and mildew, which can cause serious health problems for you and your family.<br/> <br/> <br/>
              </p>
              <p className="text-blogPara font-poppins">
              In addition to weather-related damage, surfaces can also be damaged by exposure to other environmental 
              factors, such as pollution and saltwater. These elements can cause surfaces to corrode, fade, and crack 
              over time. By applying a fresh coat of paint, you can help protect the surface from these factors and keep 
              it looking new for longer.
              Another benefit of using paint to protect surfaces is that it can help prevent insect damage. Certain types 
              of insects, such as termites and carpenter ants, can cause significant damage to wood surfaces over time. By 
              painting the surface, you can help deter these insects and protect the wood from their destructive activity.<br/> <br/> <br/>
              </p>
              <p className="text-blogPara font-poppins">
              Paint can also be used to protect surfaces from wear and tear. For example, if you have a high-traffic area in 
              your home, such as a hallway or entryway, the surface can become scuffed and damaged over time. By applying a 
              coat of paint, you can help protect the surface from this wear and tear and keep it looking new for longer.
              In conclusion, paint is an excellent way to protect surfaces from damage caused by weather, moisture, and other 
              environmental factors. Whether you're looking to protect your home, your car, or a piece of outdoor furniture, a 
              fresh coat of paint can provide an extra layer of protection that will help prolong the life of the surface. By 
              working with a professional painting company, you can ensure that your surfaces are properly protected and looking 
              their best for years to come.<br/> <br/> <br/>
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

export default Article_1;