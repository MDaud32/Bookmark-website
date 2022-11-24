import React from 'react';

const LinkPage = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <form
          id="link-form"
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-purple-900 rounded-lg md:flex-row md:space-y-0 md:space-x-3">
          <input
            type="text"
            className="flex-1 p-2 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
            id="link-input"
          />
          <button className="px-10 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none md:py-2">
            Shorten it!
          </button>
        </form>
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl">
          <p className="text-lg font-bold">https://frontendmentor.io</p>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <p className="text-lg font-bold text-cyan-400">
              https://rel.ink/k4IKyk
            </p>
            <button className="text-xl text-white bg-cyan-500 px-5 py-1 rounded-xl ">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl">
          <p className="text-lg font-bold">
            https://twitter.com/frontendmentor
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <p className="text-lg font-bold text-cyan-400">
              https://rel.ink/gxOXp9
            </p>
            <button className="text-xl text-white bg-purple-900 px-5 py-1 rounded-xl ">
              Copy
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl">
          <p className="text-lg font-bold">
            https://linkedin.com/frontend-mentor
          </p>
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <p className="text-lg font-bold text-cyan-400">
              https://rel.ink/gob3X9
            </p>
            <button className="text-xl text-white bg-cyan-500 px-5 py-1 rounded-xl ">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
