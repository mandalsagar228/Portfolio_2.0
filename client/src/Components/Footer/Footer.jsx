const Footer = () => {
  return (
    <>
      <footer className=" bg-[#12141e] pt-12 pb-12">
        {/* footer */}

        <div className="container">
          <div className="sm:flex items-center justify-between md:gap-0">
            <div className="w-full sm:h-1/2">
              <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                {" "}
                Do you want to make beautifull products
              </h2>
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[580] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line"></i>
                  Hire me
                </button>
              </a>
            </div>

            <div className="w-full sm:w-1/2">
              <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                something to be written here.
              </p>
              <div className="flex items-center text-white gap-4 flex-wrap md:gap-8 mt-10">
                <span> Follow Me: </span>
                <span>
                  <span>
                    <a
                      href="https://www.youtube.com/channel/UC7NOEQ9e16_n_kpM84tDufw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-smallTextColor text-[18px] font-[600]"
                    >
                      <i className="ri-youtube-line"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://twitter.com/mandalsagar228"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-smallTextColor text-[18px] font-[600] "
                    >
                      <i className="ri-twitter-line "></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.instagram.com/mandalsagar228/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-smallTextColor text-[18px] font-[600]"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://github.com/mandalsagar228"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-smallTextColor text-[18px] font-[600]"
                    >
                      <i className="ri-github-fill"></i>
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
      </footer>
    </>
  );
};

export default Footer;
