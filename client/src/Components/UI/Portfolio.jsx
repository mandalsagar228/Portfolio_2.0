import { useState } from "react";
import data from "../../assets/data/portfolioData";

const Portfolio = () => {
  const [nextItems, setNextItem] = useState(6);
  const [portfolios, setPortfolios] = useState(data);

  const LoadNextItems = () => {
    setNextItem((prev) => prev + 3);
  };
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap">
            <div className="mb-7 sm:mb-0">
              <h3 className="text-headingColor text-[2rem] font-[700]">
                My Recent Portfolio
              </h3>
            </div>
            <div className="flex  gap-3">
              <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                All
              </button>

              <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                Web Design
              </button>

              <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                UX-Design
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-12 ">
            {portfolios?.slice(0, nextItems).map((portfolio, index) => (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-dealy="50"
                data-aos-duration="1000"
                className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
              >
                <figure>
                  <img
                    className="rounded-[8px]"
                    src={portfolio.imgUrl}
                    alt="imgUrl"
                  />
                </figure>

                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                  <div className="w-full h-full flex  items-center justify-center">
                    <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            {nextItems < portfolios.length && data.length > 6 && (
              <button
                onClick={LoadNextItems}
                className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
