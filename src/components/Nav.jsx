import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  let Links = [
    { name: 'Features', link: '/' },
    { name: 'Pricing', link: '/' },
    { name: 'Resources', link: '/' },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="md:flex w-full fixed top-0 left-0">
      <div className="items-center bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          Bookmark
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden  text-black">
        <button>{open ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-[42rem] transition-all duration-500 ease-in bg-[#3B3054] md:bg-white h-screen opacity-80 md:opacity-100 md:h-auto md:ml-auto ${
          open ? 'block' : 'hidden'
        }`}>
        {Links.map((link) => (
          <li
            key={link.name}
            className="md:ml-8 text-xl md:my-0 my-7 text-center ">
            <div className="">
              <a
                href={link.link}
                className="text-white md:text-gray-900 hover:text-[#FA5757]">
                {link.name}
              </a>
            </div>
          </li>
        ))}
        <div className="md:hidden flex flex-col md:flex-row gap-4 px-4">
          <div className="border-b border-gray-100"></div>
          <button className="text-gray-400 text-xl font-bold hover:text-black">
            Login
          </button>
        </div>
      </ul>
      <div className="hidden md:block flex-col md:flex-row gap-4 ml-auto p-4 items-center">
        <button className="text-white bg-[#FA5757] hover:bg-white border-[#FA5757] border-2 rounded-md px-4 py-1 text-xl hover:text-[#FA5757]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
