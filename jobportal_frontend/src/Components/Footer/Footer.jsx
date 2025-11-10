import React from "react";
import { IoBag } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router";

const Footer = () => {
  const footerLinks = [
    { title: "Product", links: ["Find Job", "Find Company", "Find Employee"] },
    { title: "Company", links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"] },
    { title: "Support", links: ["Help & Support", "Feedback", "FAQs"] }
  ];

  const location = useLocation();

  if (location.pathname === "/signup" || location.pathname === "/login") return null;

  return (
    <div className="pt-20 pb-5  bg-mine-shaft-950 font-[poppins] px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-between gap-8">
        
        {/* Brand and Description */}
        <div className="sm:w-full md:w-1/3 lg:w-1/5 flex flex-col gap-4">
          <div className="flex gap-2 items-center text-bright-sun-400">
            <IoBag className="text-3xl pb-1" />
            <div className="text-xl font-semibold">Jobify</div>
          </div>

          <div className="text-xs text-mine-shaft-300 ">
            Job portal with user profiles, skill updates, certifications, work
            experience and admin job postings
          </div>

          <div className="flex gap-3 text-bright-sun-400">
            <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-800 border transition-colors duration-300">
              <FiFacebook size={18} />
            </div>
            <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-800 border transition-colors duration-300">
              <FaInstagram size={18} />
            </div>
            <div className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-800 border transition-colors duration-300">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>

        {/* Footer Link Sections */}
        {footerLinks.map((item, index) => (
          <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/6">
            <div className="text-lg font-semibold mb-4 text-bright-sun-400">{item.title}</div>
            {item.links.map((link, idx) => (
              <div
                key={idx}
                className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition-transform duration-300 ease-in-out"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
