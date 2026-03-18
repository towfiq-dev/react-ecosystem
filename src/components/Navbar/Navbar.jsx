import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Analytics",
    path: "/dashboard/analytics"
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects"
  },
  {
    id: 4,
    name: "Settings",
    path: "/settings"
  },
  {
    id: 5,
    name: "Profile",
    path: "/user/profile"
  }
];
const Navbar = () => {
  const [open, setOpen] =  useState(false)
  const links = navigationData.map(route=> <Link key={route.id} route= {route}></Link>)
  return (
      <nav className='flex justify-between mx-5 mt-5 text-xl font-bold'>
        <span className='flex gap-2' onClick={()=> setOpen(!open)}>
        {open? <X className='md:hidden'></X>: <Menu className='md:hidden'></Menu>}
        <ul className={`md:hidden absolute bg-amber-100 text-black px-3 rounded duration-1000 ${open? 'top-12': '-top-40'}`}>
          {
            links
          }
        </ul>
        <h3>All Section</h3>
        </span>
        <ul className='gap-8 mx-2 md:flex hidden'>
          {
            links
          }
        </ul>
        <button className='btn text-2xl'>Sign In</button>
      </nav>
  );
};

export default Navbar;