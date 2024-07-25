"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleDropdown = (dropdown) => {
    setDropdownVisible(dropdownVisible === dropdown ? null : dropdown); // toggle dropdown visibility
  };

  return (
    <div className="grid lg:grid-cols-2 gap-[5%] pb-[15%] lg:pb-[8%] bg-[#09002a] px-[10%] py-[50px] md:py-[5%]">
      <div data-aos="fade-up" className="">
        {/* <h2 className="text-white text-[45px] leading-[72px]">
          Guiding you through the whole process
        </h2> */}
        <img src="/assets/fonts/Guiding you through the whole process.svg" />
        <p className="text-[18px] py-6 leading-[30px] text-white/70">
          Our team of blockchain and crypto experts is here to guide you. Plus,
          we handle all regulatory requirements on your behalf.
        </p>
        <div className="relative">
            <button
              onClick={() => toggleDropdown("get-started-features")}
              className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              Get Started
            </button>
            {dropdownVisible === "get-started-features" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg">
                <a
                  href="https://www.jotform.com/233520788042859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-[#28C0F5] duration-300 hover:text-white"
                >
                  For USA Individuals
                </a>
                <a
                  href="https://www.jotform.com/240868739736171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2  hover:bg-[#28C0F5] duration-300 hover:text-white"
                >
                  For USA Business
                </a>
              </div>
            )}
          </div>
      </div>
      <div data-aos="fade-up" className="h-full">
        <img src="/assets/img3.png" />
      </div>
    </div>
  );
};

export default Service;
