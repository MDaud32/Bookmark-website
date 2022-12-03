import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Footer = () => {
  let Links = [
    { name: 'Features', link: '/Features' },
    { name: 'Download', link: '/Download' },
    { name: 'Faq', link: '/Faq' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="w-full bg-[#5368DF] mt-24">
        <div className="w-full mx-auto text-white space-y-8 p-10 py-24">
          <h1 className="text-center text-2xl">35,000+ ALREADY JOINED</h1>
          <p className="text-center text-4xl font-bold max-w-lg mx-auto">
            Stay up-to-date with what we're doing
          </p>
          <div className="flex lg:flex-row flex-col mx-auto items-center gap-4 justify-center">
            <input
              type="text"
              className="p-4 px-6 rounded-lg"
              placeholder="Enter your email address"
            />
            <button className="bg-[#FA5757] px-4 py-4 rounded-lg hover:bg-[#e45151] text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <footer className="text-white p-10 bg-[#252B46] px-40">
        <div className="md:flex w-full my-6  text-white">
          <div className="mr-10">
            <div className="font-bold text-3xl cursor-pointer text-white flexfont-[Poppins] ">
              Bookmark
            </div>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 w-full md:w-auto transition-all duration-500 ease-in opacity-80 md:opacity-100 md:h-auto text-white`}>
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 text-center">
                <div className="">
                  <Link
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    to={link.link}
                    className="text-white  hover:text-[#FA5757] cursor-pointer">
                    {link.name}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-center lg:justify-end ml-auto gap-8 px-4">
            <div className="border-b border-gray-100"></div>
            <button className="text-white text-3xl  hover:text-[#FA5757]">
              <BsFacebook />
            </button>
            <button className="text-white text-3xl hover:text-[#FA5757]">
              <BsTwitter />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
