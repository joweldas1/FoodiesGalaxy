import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-[#081229] border-2 border-[rgba(255,165,0)] rounded">
  <nav className="grid grid-flow-col gap-4 orangeGlossy font-semibold ">
    <a className="link link-hover">All Items</a>
    <a className="link link-hover">Foodies Tour</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">About Us</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <FaFacebook className='text-3xl text-blue-600   bg-white border border-[rgba(255,165,0)] rounded-full p-1 '/>
      <FaInstagram className='text-3xl  bg-white text-[rgba(255,165,0)] border border-[rgba(255,165,0)] rounded-full p-1 '/>
      <FaYoutube className='text-3xl  bg-white border text-red-700 border-[rgba(255,165,0)] rounded-full p-1 '/>
    </div>
  </nav> 
  <aside>
    <p className='text-[rgba(255,165,0)]'>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;