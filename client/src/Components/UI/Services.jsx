import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import design from "../../assets/images/design.png";
import appImg from "../../assets/images/apps.png";

const Service = () => {
  return (
    <>
      <section id="service">
        <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[500] text-[2.4rem] mb-5">
              What do i help ?
            </h2>

            <p className="lg: max-w-[600] lg:mx-auto text-headingColor  font-[500] text-[16px] leading-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
            </p>
          </div>
          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm: max-w-xl sm:m-auto sm:px-0">
              <div
                className="relative text-gray-700 antialiased text-sm  font-semibold
              "
              >
                {/*===========Vertical Line Runnig through the middle==========*/}

                <div className="hidden absolute w-1 sm:block bg-indigo-300  h-full left-1/2  transform  -translate-x-1/2"></div>
                {/*==========Left Card==========*/}
                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full ms-auto  items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Frontend Development
                          </h3>
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy te
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={frontendImg} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/*==========Right Card==========*/}

                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto  items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Backend Development
                          </h3>
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy te
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full ms-auto  items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            UI/UX Development
                          </h3>
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy te
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={design} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/*==========Right Card==========*/}

                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto  items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            App Development
                          </h3>
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy te
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={appImg} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
