import React from "react";
import "../../public/Images/Vector 31.png";
import '../../public/Images/Group 2.png';
import '../../public/Images/Vector 30.png';
import  '../../public/Images/Arrow 1.png'
import '../../public/Images/Star 7.png';
import '../../public/Images/Group 1261152705.png';
import '../../public/Images/Star 2.png';
import '../../public/Images/Star 4.png';
import '../../public/Images/Star 8.png'

const Hero = () => {
  return (
    <>
    <div className="max-h-screen overflow-y-auto lg:max-h-full lg:overflow-hidden">
    <img className="absolute ml-[1400px] mt-[150px]" src="/Images/Star 7.png" alt=""/>
    <img src="/Images/Star 2.png " alt=""  className="absolute ml-[684px] top-[153px] w-[14.99px] h-[17.81px]"/>
    <img src="/Images/Star 4.png" alt=""  className=" absolute ml-[290px] top-[206px] h-[22.16px] w-[20px] "/>
    <img src="/Images/Star 8.png" alt="" className="absolute ml-[918px] top-[715px]"/>
          <div className=" flex justify-around w-[1200px] h-[573px] ml-[50px] gap-[29px] items-center mt-20  bg-gradient-radial from-blue-900 to-teal-800">
        <div className="">
          <h1 className=" text-4xl ml-[225px]   mb-1 text-white">Revolutionising <span className="text-[#75FA88]">Real</span> <br/> <span className="text-[#75FA88]">Estate</span>  Investment <br/> <span className="text-[#75FA88]">Through</span> Blockchain</h1>
          <img src="/Images/Vector 31.png" alt=""  className=" ml-44
          "/>
          <p className="text-xl ml-[225px] w-[496px] mt-2 text-white">
            Experience the Future of Property Buying, Selling, and Investing &
            Navigate the New Era of Digital Property Transactions with Ease and
            Security.
          </p>
        </div>
        <div className=" overflow-x-hidden w-[593px]">
            <img className="top-[150px] absolute z-30 scroll-m-0" src="/Images/Group 2.png" alt="" />
            <img  src="/Images/Vector 30.png" alt=""  className=" absolute"  />
        </div>
      </div>
      <div className="flex gap-[20px] items-center ml-[278px] mt-[-110px]">
        <div className=" bg-green-500 text-2xl w-[280px] h-[34px] items-center text-center rounded-xl cursor-pointer ">
        Start Your Investment Journey
        </div>
        <div className="flex gap-2 items-center">
            <p className="text-[#75FA88]">Explore Properties </p>
        <img src="/Images/Arrow 1.png" alt=""  className="w-[25px] mt-2"/>
        </div>
      </div>
      </div>
      <div className="flex items-center justify-around mt-64 gap-1 shadow-xl">
        <div className="" >
            <h1 className=" absolute mt-[188px] ml-[210px] text-2xl text-[#75FA88] font-bold">Logo Here</h1>
      <img src="/Images/Group 1261152705.png" alt="" className=" ml-16 w-[400px] h-[400px]" />
        </div>
        <div className="w-[541px] mr-14">
            <h1 className="text-white text-2xl text-center mb-2">Why Choose Us?</h1>
            <p className="text-white">Platlo is a blockchain-powered platform that transforms the way people buy, sell, and invest in real estate. It combines elements of a real estate exchange, metaverse visualization, property tokenization, and NFT-based document security. Platlo aims to simplify real estate transactions, offering an immersive metaverse experience for property visualization. Additionally, it facilitates fractional ownership and rental management, turning real estate investments into a dynamic and profitable venture.</p>
           <button className="bg-[#75FA88] w-[127px] rounded-md mt-4">Sell me Property</button>
      </div>
    </div>
    </>
  );
};

export default Hero;
