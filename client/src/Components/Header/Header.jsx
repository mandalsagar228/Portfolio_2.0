const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[18px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]  rounded-full flex items-center justify-center">
              S
            </span>
            <div className="leading-[20px] ">
              <h2 className="text-xl text-smallTextColor font-[200]">Sagar</h2>
              <p className="text-smallTextColor text-[1px] font-[500]">
                Personal
              </p>
            </div>
          </div>

          {/* ==============================Logo End===============================*/}
          {/* ==============================Menu Start===============================*/}

          <div className="menu">
            <ul className=" flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[500]" href="#about">
                  About
                </a>
              </li>

              <li>
                <a className="text-smallTextColor font-[500]" href="#service">
                  Service
                </a>
              </li>

              <li>
                <a className="text-smallTextColor font-[500]" href="#portfolio">
                  Portfolio
                </a>
              </li>

              <li>
                <a className="text-smallTextColor font-[500]" href="#ontact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ==============================Menu End===============================*/}

          {/* ==============================Menu Rignt===============================*/}

          <div className=" flex items-center gap-4">
            <button className=" flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 ">
              <i class="ri-send-plane-line"></i> Let's Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>

          {/* ==============================Menu Right End===============================*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
