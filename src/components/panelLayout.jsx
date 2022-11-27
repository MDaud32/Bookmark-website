import React, { useState } from 'react';
import imageOne from '../images/illustration-features-tab-1.svg';
import imageTwo from '../images/illustration-features-tab-2.svg';
import imageThree from '../images/illustration-features-tab-3.svg';
const tabsData = [
  {
    image: `${imageOne}`,
    label: 'Simple Bookmarking',
    title: 'Bookmark in one click',
    content:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    button: 'More Info',
  },
  {
    image: `${imageTwo}`,
    label: 'Speedy Searching',
    title: 'Intelligent search',
    content:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    button: 'More Info',
  },
  {
    image: `${imageThree}`,
    label: 'Easy Sharing',
    title: 'Share your bookmarks',
    content:
      'Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.',
    button: 'More Info',
  },
];

const PanelLayout = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="relative container mt-16 lg:mt-40 mx-auto p-6">
      <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
      <p className="lg:text-xl max-w-md mx-auto text-center text-gray-400">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="flex space-x-10 text-xl text-gray-600 border-b lg:w-1/2 mx-auto justify-center mt-16">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-[#FA5757]'
                  : 'border-transparent hover:border-gray-200'
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className="container relative flex flex-col lg:flex-row mt-10 lg:space-x-16">
        <div className="relative py-4 lg:w-1/2 mx-auto ">
          <div className="bg-tab"></div>
          <img
            src={tabsData[activeTabIndex].image}
            alt=""
            className="z-10 relative lg:ml-16"
          />
        </div>
        <div className="py-4 lg:w-1/2 mx-auto text-center lg:text-left lg:space-y-10 space-y-8">
          <h2 className="text-4xl font-bold">
            {tabsData[activeTabIndex].title}
          </h2>
          <p className="max-w-md text-lg text-gray-400">
            {tabsData[activeTabIndex].content}
          </p>
          <button className="px-3 py-3 bg-[#5368DF] rounded-md text-xl hover:bg-white border-4 border-[#5368DF] hover:text-[#5368DF]">
            {tabsData[activeTabIndex].button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
