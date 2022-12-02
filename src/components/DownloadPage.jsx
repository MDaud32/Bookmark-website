import React from 'react';
import chrome from '../images/logo-chrome.svg';
import fireFox from '../images/logo-fireFox.svg';
import opera from '../images/logo-opera.svg';

const DownloadPage = () => {
  return (
    <div className="mt-40 mx-auto px-6">
      <div className="flex flex-col text-center mx-auto mb-24">
        <h1 className="text-5xl font-bold ">Download the extension</h1>
        <p className="text-gray-400 max-w-md text-center mx-auto mt-4 text-xl">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-7 items-center mx-auto space-y-10 lg:px-24 lg:space-y-0 justify-center ">
        <div className="flex flex-col rounded-sm bg-white w-full lg:w-1/3 p-2 shadow-xl transition-shadow hover:shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="rounded-xl bg-white p-6 sm:p-8">
            <div>
              <img src={chrome} alt="" className="mb-6 w-40 mx-auto" />
              <h3 className="text-5xl font-bold text-center text-indigo-600">
                Add to Chrome
              </h3>
              <div className="mt-4 border-t-2 border-indigo-100 pt-2">
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                  Minimum Version 62
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center text-indigo-600 mx-auto justify-center">
              <button className="text-lg font-medium bg-[#5368DF] mx-4 py-4 px-3 md:text-2xl text-white rounded-md hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF]">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col scale-y-95 rounded-sm bg-white w-full lg:w-1/3 lg:mt-8 p-2 shadow-xl transition-shadow hover:shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="rounded-xl bg-white p-6 sm:p-8">
            <div>
              <img src={fireFox} alt="" className="mb-6 w-40 mx-auto" />
              <h3 className="text-5xl font-bold text-center text-indigo-600">
                Add to FireFox
              </h3>
              <div className="mt-4 border-t-2 border-indigo-100 pt-2">
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                  Minimum Version 62
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center text-indigo-600 mx-auto justify-center">
              <button className="text-lg font-medium bg-[#5368DF] mx-4 py-4 px-3 md:text-2xl text-white rounded-md hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF]">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-sm bg-white w-full lg:w-1/3 lg:mt-16 p-2 shadow-xl transition-shadow scale-y-90 hover:shadow-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="rounded-xl bg-white p-6 sm:p-8">
            <div>
              <img src={opera} alt="" className="mb-6 w-40 mx-auto" />
              <h3 className="text-5xl font-bold text-center text-indigo-600">
                Add to Opera
              </h3>
              <div className="mt-4 border-t-2 border-indigo-100 pt-2">
                <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                  Minimum Version 62
                </p>
              </div>
            </div>

            <div className="mt-16 flex items-center text-indigo-600 mx-auto justify-center">
              <button className="text-lg font-medium bg-[#5368DF] mx-4 py-4 px-3 md:text-2xl text-white rounded-md hover:bg-white border-2 border-[#5368DF] hover:text-[#5368DF]">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
