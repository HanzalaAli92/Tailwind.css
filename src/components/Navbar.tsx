// "use client"
// import { AiOutlineMenu } from "react-icons/ai";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";


//  const Navbar = () => {

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     }
//     return (
//      <div className="container pt-6">
//         <div className="flex justify-between items-center">
//             <Image 
//             src={require("../../public/images/logo.png")} 
//             alt="logo" 
//             width={50}
//             height={50} 
//             />
//             {isOpen && (
//             <ul  className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
              
//                  <li><Link href="/">Home</Link></li>
//                 <li><Link href="/feature">Feature</Link></li>
//                 <li><Link href="/menu">Menu</Link></li>
//                 <li><Link href="/services">Services</Link></li>
//                 <li><Link href="/survey">Survey</Link></li>

//                 <button className="bg-accent text-white px-6 py-2 rounded-3xl">SignUp</button>
//             </ul>)}

//             <AiOutlineMenu 
//             size={30}
//             onClick={toggleNavbar}
//             className="md:hidden text-accent cursor-pointer"/>
//         </div>
//      </div>
//     );
//   }

//   export default Navbar

"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container pt-6 ">
      <div className="flex justify-between items-center">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={50}
          height={50}
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-semibold text-[14px] pr-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/feature">Feature</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/survey">Survey</Link>
          </li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
          <a href="/sign-up">SignUp</a>
          </button>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <AiOutlineMenu
          size={30}
          onClick={toggleNavbar}
          className="md:hidden text-accent cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden font-semibold text-[14px] text-accent ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/feature">Feature</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/survey">Survey</Link>
          </li>
          <button  className="bg-accent text-white px-6 py-2 rounded-3xl">
            <a href="/sign-up">SignUp</a>
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
