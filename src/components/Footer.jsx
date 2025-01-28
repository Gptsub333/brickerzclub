import React from "react";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className="border-t mt-20 py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="">
          <div className="flex justify-between items-center">
          <a href="#" className="flex items-center flex-shrink-0">
                      <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                      <span className="text-xl tracking-tight">Brickerzclub</span>
                    </a>
          </div>
          <ul className="space-y-2 pt-6">
            Bringing joy to playtime,<br /> one toy at a time.
          </ul>
        </div>
        <div className="">
          <h3 className="text-md font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {communityLinks.map((ressource, index) => {
              return (
                <li className="" key={index}>
                  <a
                    href={ressource.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {ressource.text}{" "}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <h3 className="text-md font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
            <MdOutlineMail className="text-orange-500"/>
              <span>sales@brickerzclub.com</span>
            </li>
            <li className="flex items-center space-x-2">
            <LuPhone className="text-orange-500"/>
              <span>(512)810-0534</span>
            </li>
            <li className="flex items-center space-x-2">
            <SlLocationPin className="text-orange-500"/>
              <span>10921 East Crystal Parkway Ste H504 Leander TX 78641</span>
            </li>


          </ul>
        </div>
      </div>
      <div className="mt-6 justify-center text-center">
        <h5 className="text-center text-xl text-neutral-700">
          Copyright 2025, Brickerzclub
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
