import React from 'react';
// import brandRecognition from '../images/icon-brand-recognition.svg';
// import customizable from '../images/icon-fully-customizable.svg';
// import records from '../images/icon-detailed-records.svg';
import {
  ImTwitter,
  ImFacebook,
  ImPinterest2,
  ImInstagram,
} from 'react-icons/im';

const StatPage = () => {
  return (
    <div className="">
      <div className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-2xl mb-6 font-bold text-center">
            Advanced Statisticts
          </h2>
          <p className="text-gray-400 max-w-xs mx-auto text-center md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
      <div className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          <div className="hidden absolute top-24 left-16 h-3 bg-cyan-400 md:block w-10/12"></div>
          <div className="absolute w-2 h-full -ml-1 bg-cyan-400 md:hidden left-1/2  "></div>
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-slate-900">
                <img src={brandRecognition} alt="" className="" />
              </div>
            </div>
            <h5 className="pt-6 font-bold text-xl text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="relative flex flex-col p-6 mt-24 md:mt-8 space-y-6 bg-white rounded-lg md:w-1/3">
            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-slate-900">
                <img src={records} alt="" className="" />
              </div>
            </div>
            <h5 className="pt-6 font-bold text-xl text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="relative flex flex-col p-6 mt-24 md:mt-16 space-y-6 bg-white rounded-lg md:w-1/3">
            <div className="absolute -ml-10 -top-10 md:left-16 left-1/2">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-slate-900">
                <img src={customizable} alt="" className="" />
              </div>
            </div>
            <h5 className="pt-6 font-bold text-xl text-center capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="cta py-24 bg-violet-900">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button className="px-10 py-5 mx-auto rounded-full bg-cyan-700 hover:bg-cyan-800 text-white font-bold md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-black text-white flex flex-col md:flex-row justify-around px-16 py-16">
        <div className="flex flex-col text-center ">
          <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-white text-center mx-auto md:mx-0 mb-4">
            Shortly
          </div>
          <div className="font-alata md:flex md:space-x-8 space-y-6 md:space-y-0 text-white">
            <div className="group">
              <a href="" className="">
                About
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Careers
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Events
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Products
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="" className="">
                Suppots
              </a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row text-white text-3xl gap-4 mx-auto mt-8 md:mt-0">
            <div className="">
              <ImPinterest2 />
            </div>
            <div className="">
              <ImTwitter />
            </div>
            <div className="">
              <ImInstagram />
            </div>
            <div className="">
              <ImFacebook />
            </div>
          </div>
          <div className="mt-6 text-gray-300 text-center">
            @2022 Shortly. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatPage;
