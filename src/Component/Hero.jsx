import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import "../../public/Images/Vector 31.png";
import "../../public/Images/Group 2.png";
import "../../public/Images/Vector 30.png";
import "../../public/Images/Arrow 1.png";
import "../../public/Images/Star 7.png";
import "../../public/Images/Group 1261152705.png";
import "../../public/Images/Star 2.png";
import "../../public/Images/Star 4.png";
import "../../public/Images/Star 8.png";
import "../../public/Images/Star 10.png";
import "../../public/Images/image 64.png";
import "../../public/Images/Ellipse 70.png";
import "../../public/Images/ethereum (1) 1.png";

const Hero = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };
console.log(handleScroll)
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full overflow-y-auto transition-transform duration-300 transform ${
          isScrolledDown ? "scale-90 translate-y-[-10px]" : "scale-100"
        }`}
      >
        <div className="max-h-screen overflow-y-auto lg:max-h-full lg:overflow-hidden">
          <img
            className="absolute ml-[1400px] mt-[150px] rotate-[170deg]"
            src="/Images/Star 7.png"
            alt=""
          />
          <img
            src="/Images/Star 2.png "
            alt=""
            className="absolute ml-[684px] top-[153px] w-[14.99px] h-[17.81px] rotate-[120deg]"
          />
          <img
            src="/Images/Star 4.png"
            alt=""
            className=" absolute ml-[290px] top-[206px] h-[22.16px] w-[20px] rotate-[130deg] "
          />
          <img
            src="/Images/Star 8.png"
            alt=""
            className="absolute ml-[918px] top-[715px] rotate-[140deg]"
          />
          <img
            src="/Images/Star 10.png "
            alt=""
            className=" absolute top-[810px] left-[1280px] rotate-[170deg] "
          />
          <div className=" flex justify-around w-[1200px] h-[573px] ml-[50px] gap-[29px] items-center mt-20  bg-gradient-radial from-blue-900 to-teal-800">
            <div className="">
              <h1 className=" text-4xl ml-[225px]   mb-1 text-white">
                Revolutionising <span className="text-[#75FA88]">Real</span>{" "}
                <br /> <span className="text-[#75FA88]">Estate</span> Investment{" "}
                <br />
                Through <span className="text-[#75FA88]">Blockchain</span>
              </h1>
              <img
                src="/Images/Vector 31.png"
                alt=""
                className=" ml-44
          "
              />
              <p className="text-xl ml-[225px] w-[496px] mt-2 text-white">
                Experience the Future of Property Buying, Selling, and Investing
                & Navigate the New Era of Digital Property Transactions with
                Ease and Security.
              </p>
            </div>
            <div className=" overflow-x-hidden w-[593px]">
              <img
                className="top-[150px] absolute z-30 scroll-m-0"
                src="/Images/Group 2.png"
                alt=""
              />
              <img src="/Images/Vector 30.png" alt="" className=" absolute" />
            </div>
          </div>
          <div className="flex gap-[20px] items-center ml-[278px] mt-[-110px]">
            <div className=" bg-green-500 text-2xl w-[280px] h-[34px] items-center text-center rounded-xl cursor-pointer ">
              Start Your Investment Journey
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[#75FA88]">Explore Properties </p>
              <img src="/Images/Arrow 1.png" alt="" className="w-[25px] mt-2" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around ml-[200px] bg-[#FFFFFF0A] mt-64 gap-1 shadow-xl w-[80vw]">
          <div className="">
            <h1 className=" absolute mt-[188px] ml-[210px] text-2xl text-[#75FA88] font-bold">
              Logo Here
            </h1>
            <img
              src="/Images/Group 1261152705.png"
              alt=""
              className=" ml-16 w-[400px] h-[400px]"
            />
          </div>
          <div className="w-[541px] mr-14">
            <h1 className="text-white text-2xl text-center mb-2">
              Why Choose Us?
            </h1>
            <p className="text-white">
              Platlo is a blockchain-powered platform that transforms the way
              people buy, sell, and invest in real estate. It combines elements
              of a real estate exchange, metaverse visualization, property
              tokenization, and NFT-based document security. Platlo aims to
              simplify real estate transactions, offering an immersive metaverse
              experience for property visualization. Additionally, it
              facilitates fractional ownership and rental management, turning
              real estate investments into a dynamic and profitable venture.
            </p>
            <button className="bg-[#75FA88] w-[127px] rounded-md mt-4">
              Sell me Property
            </button>
          </div>
        </div>
        <h1 className=" font-semibold text-white text-3xl mt-40 text-center">
          Featured Listings
        </h1>
        <h2 className="mt-6 text-center text-2xl text-white mx-auto">
          Below are some featured property listings.
        </h2>
        <div className="flex justify-center mt-10 gap-8  ">
          {/* current bid div */}
          <div
            id="layer"
            className=" w-[384px] h-[460px] border border-spacing-1  "
          >
            <div className="flex  justify-around mt-3">
              <h1 className="text-white font-semibold">Current bid </h1>
              <button className="bg-[#75FA88] font-medium w-[130px] h-[40px] rounded-3xl px-5">
                Place Bid
              </button>
            </div>
            <div className="flex justify-start ml-6 mb-3 gap-3">
              <img src="/Images/ethereum (1) 1.png" alt="" />
              <p className="text-white font-normal">600 ETH</p>
            </div>
            {/* end current div */}
            <img
              src="/Images/image 64.png"
              alt=""
              className="w-[320px] h-[288px] rounded-sm"
            />
            <div className="flex  justify-start gap-5 mt-3">
              <h1 className="text-white font-semibold">
                Listed by Dubai Marina{" "}
              </h1>
              <button className="text-[#75FA88] rounded-sm">View button</button>
            </div>
            <div className="flex justify-start ml-4 gap-4">
              <img src="/Images/Ellipse 70.png" alt="" />
              <p className="text-white font-normal">Brix Properties </p>
            </div>
          </div>
          {/* Current bid div  */}
          <div
            id="layer"
            className="w-[384px] h-[460px] border border-spacing-1"
          >
            <div className="flex  justify-around mt-3">
              <h1 className="text-white font-semibold">Current bid </h1>
              <button className="bg-[#75FA88] font-medium w-[130px] h-[40px] rounded-3xl px-5">
                Place Bid
              </button>
            </div>
            <div className="flex justify-start ml-6 mb-3 gap-3">
              <img src="/Images/ethereum (1) 1.png" alt="" />
              <p className="text-white font-normal">800 ETH</p>
            </div>
            {/* End of current div */}
            <img
              src="/Images/image 64.png"
              alt=""
              className="w-[320px] h-[288px] rounded-sm"
            />
            <div className="flex  justify-start gap-5 mt-3">
              <h1 className="text-white font-semibold">
                Listed by Dubai Marina
              </h1>
              <button className="text-[#75FA88] rounded-sm">View button</button>
            </div>
            <div className="flex justify-start ml-4 gap-4">
              <img src="/Images/Ellipse 70.png" alt="" />
              <p className="text-white font-normal">Brix Properties</p>
            </div>
          </div>
          {/* Current bid div */}
          <div
            id="layer"
            className="w-[384px] h-[460px] border border-spacing-1"
          >
            <div className="flex  justify-around mt-3">
              <h1 className="text-white font-semibold">Current Bid </h1>
              <button className="bg-[#75FA88] font-medium w-[130px] h-[40px] rounded-3xl px-5">
                Place Bid
              </button>
            </div>
            <div className="flex justify-start ml-6  mb-3 gap-3">
              <img src="/Images/ethereum (1) 1.png" alt="" />
              <p className="text-white font-normal">900 ETH</p>
            </div>
            {/* Current bid end */}
            <img
              src="/Images/image 64.png"
              alt=""
              className="w-[320px] h-[288px] rounded-sm"
            />
            <div className="flex  justify-start gap-5 mt-3">
              <h1 className="text-white font-semibold">
                Listed by Dubai Marina
              </h1>
              <button className="text-[#75FA88] rounded-sm">View button</button>
            </div>
            <div className="flex justify-start ml-4 gap-4">
              <img src="/Images/Ellipse 70.png" alt="" />
              <p className="text-white font-normal">Brix Properties</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
