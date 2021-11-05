import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const links = ['Home', 'Blog', 'Feature', 'About'];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-gray-100 flex p-6 shadow-md md:px-16">
        <h1 className="text-3xl font-bold tracking-wider text-indigo-600 italic border-b-4 border-indigo-400 transform skew-y-6  hover:border-red-600 ">
          FSD
        </h1>

        {!toggle ? (
          <span
            className={`ml-auto cursor-pointer sm:hidden`}
            onClick={() => {
              console.log('Clicked');
              setToggle(!toggle);
            }}
          >
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        ) : (
          <span
            className={`ml-auto cursor-pointer`}
            onClick={() => {
              console.log('Clicked');
              setToggle(!toggle);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        )}

        {/* desktop navigation */}
        <div className="ml-auto hidden sm:inline">
          <ul className="flex">
            {links.map((link) => (
              <li className="mx-3 font-semibold tracking-wider text-gray-700 border-b-2 cursor-pointer hover:border-indigo-500  ">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Transition
        show={toggle}
        enter="transition ease-in-out duration-700 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-700 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className={`menu w-full h-screen bg-gray-800 sm:hidden 
        `}
      >
        <ul className=" flex justify-center items-center flex-col h-1/2">
          {links.map((link) => (
            <li className="my-6 text-gray-200 text-xl font-semibold tracking-wider border-b-2 border-opacity-20 hover:border-indigo-500 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </Transition>
    </>
  );
};

export default Header;
