import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../../molecules';

const Navbar = () => {
  return (
    <div className="flex flex-row items-center w-full px-10 py-10">
      <div className="font-bold text-3xl">
        <Link to="/">MDev</Link>
      </div>
      <MenuItems />
      <div className="">
        <button className="bg-purple-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-purple-900">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
