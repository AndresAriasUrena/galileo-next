"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeroAnim from "../../../public/assets/lottie/hero-anim.json";
import "aos/dist/aos.css";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({ topButton: false, sectionButton: false });
  const navItems = ["Home", "Features", "Solution", "Process", "About Us"];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({ duration: 1000 });
    }
  }, []);

  const handleNavClick = (index, sectionId) => {
    setActiveIndex(index);
    if (typeof document !== "undefined") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setShow(false);
  };

  const toggleDropdown = (button) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  return (
    <div className="relative text-white gradient-background py-[5%]">
      <header className="flex justify-between w-full items-start">
        <div className="mx-auto md:mx-[5%] ">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-10 a-auto md:h-14 lg:h-auto"
          />
        </div>
        <div className="hidden lg:flex mx-[2%] gap-[50px] items-center">
          <ul className="text-[17px] cursor-pointer flex gap-[50px] font-[700]">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${
                  activeIndex === index ? "" : "text-white/70 text-[16px]"
                }`}
                onClick={() =>
                  handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))
                }
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="relative">
            <button
              onClick={() => toggleDropdown('topButton')}
              className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              Get Started
            </button>
            {dropdownVisible.topButton && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white text-black rounded-lg shadow-lg">
                <a
                  href="https://www.jotform.com/233520788042859"
                  className="block px-4 py-2 hover:bg-[#28C0F5] duration-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For USA Individuals
                </a>
                <a
                  href="https://www.jotform.com/240868739736171"
                  className="block px-4 py-2 hover:bg-[#28C0F5] duration-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For USA Business
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-5 right-4 lg:hidden">
          <img
            onClick={() => setShow(!show)}
            src="/assets/Icons/menu.svg"
            className="h-10 w-10 text-white "
          />
        </div>
        <div className="absolute lg:hidden">
          <div
            className={`${
              show === true ? "block" : "hidden"
            } fixed z-50 top-20 about-gradient right-5 backdrop-blur-lg py-4 px-5 rounded-lg`}
          >
            <ul className="text-[15px] space-y-3 cursor-pointer  gap-[50px] font-[700]">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item `}
                  onClick={() =>
                    handleNavClick(index, item.toLowerCase().replace(/ /g, "-"))
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="flex px-[9%] flex-col h-[700px] lg:flex-row gap-[2%] 2xl:gap-[5%] pt-[5%] items-start justify-center"
      >
        <div className="lg:w-[60%] space-y-8">
          <h2 className="text-[38px] md:text-[72px] font-[600] leading-[60px] lg:leading-[100px]">
            Digital assets
            <br /> Done Right with
          </h2>
          <img src="/assets/fonts/Galileo capital.svg" className="w-full" />
          <p className="text-sm md:text-[23px] lg:text-[27px] font-[300] leading-[28px] md:leading-[38px]">
            Safeguard Your Assets and Navigate the volatile world of crypto
            assets with our{" "}
            <span className="font-[500]">secure and compliant</span> platform.
          </p>
          <div className="flex gap-8">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('sectionButton')}
                className="bg-[#FCF0F8] hover:bg-[#28C0F5] duration-300 hover:text-white text-black py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
              >
                Get Started
              </button>
              {dropdownVisible.sectionButton && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white text-black rounded-lg shadow-lg">
                  <a
                    href="https://www.jotform.com/233520788042859"
                    className="block px-4 py-2 hover:bg-[#28C0F5] duration-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    For USA Individuals
                  </a>
                  <a
                    href="https://www.jotform.com/240868739736171"
                    className="block px-4 py-2 hover:bg-[#28C0F5] duration-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    For USA Business
                  </a>
                </div>
              )}
            </div>
            <button
              onClick={() =>
                (window.location.href =
                  "https://in.sumsub.com/idensic/l/#/uni_k0Terawfp39AHWgi")
              }
              className="bg-transparent border-2 border-[#28C0F5] hover:bg-[#28C0F5] duration-300 hover:text-white text-[#28C0F5] py-2 md:py-4 px-6 md:px-9 rounded-full text-[15px] md:text-[17px] font-[500]"
            >
              Verify email
            </button>
          </div>
        </div>
        <div className="w-[60%] md:w-auto mx-auto md:h-[85%]">
          <Lottie options={defaultOptions} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
