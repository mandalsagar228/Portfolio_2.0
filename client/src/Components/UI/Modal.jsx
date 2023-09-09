import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
  return (
    <div className="w-full h-full fixed top-8 left-8 z-20 bg-headingColor bg-opacity-40">
      <div className="max-w-[600] absolute top-1/2 left-1/2 z-28 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img src={portfolio.imgUrl} alt="img" className="round-[8px]" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>
          <div>
            <p className="text-[15px] leading-7 text-smallTextColor">
              {portfolio.description}
            </p>
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <h4 className=" text-headingColor text-[18px] ">Technologies:</h4>

              {portfolio.technologies.map((item, index) => (
                <span
                  key={index}
                  className=" bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-10"
                >
                  {item}
                </span>
              ))}
            </div>
            <a href={portfolio.siteUrl}>
              <button className=" bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Live Site
              </button>
            </a>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-8 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
