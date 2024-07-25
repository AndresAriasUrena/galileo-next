"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CTAnim from "../../../public/assets/lottie/CTA-anim.json";
import Lottie from "react-lottie";

const About = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 9000 });
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CTAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
const toggleDropdown = (dropdown) => {
    setDropdownVisible(dropdownVisible === dropdown ? null : dropdown); // toggle dropdown visibility
  };

  return (
    <div
      id="about-us"
      className="section pt-[8%] gap-[2%] bg-[#09002a] px-[10%] py-[50px] md:py-[5%]"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="2000"
        className="grid py-8 md:py-0 md:grid-cols-2 items-center gap-[12%]"
      >
        <img src="/assets/fonts/What people are saying about us.svg" />
        <p className="text-[18px] leading-[32px] text-white/70">
          Everything you need to liquidate your crypto assets realiably.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="4000"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-[4%] py-[12%]"
      >
        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img src="/assets/quotes.png" />
          <p className="pt-4 text-[15px] leading-[27px]">
            Since we started using Galileo Capital, our operations are
            much more efficient and safe. The integration was quick and the
            Support team is always available to help us. I recommend
            highly recommend your services.
          </p>
        </div>

        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img src="/assets/quotes.png" />
          <p className="pt-4 text-[15px] leading-[27px]">
            Galileo Capital has provided us with a complete solution to
            our cryptocurrency settlement needs. Your rates
            Competitive solutions and personalized customer service have made a
            big difference for our company.
          </p>
        </div>

        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img src="/assets/quotes.png" />
          <p className="pt-4 text-[15px] leading-[27px]">
            Galileo Capital's advanced technology and focus on
            security have allowed us to handle large volumes of
            transactions with confidence. Regulatory compliance in the US and
            Costa Rica is a big plus.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="2000"
        className="bg-cover bg-center py-[4%] my-[8%] md:my-0 flex flex-col md:flex-row items-center gap-[5%] p-4 rounded-[20px]"
        style={{
          backgroundImage: "url('/assets/bg-cta.png')",
        }}
      >
        <div className="md:w-[30%]">
          <Lottie
            options={defaultOptions}
            className="h-[20px] md:h-[280px] w-auto"
          />
        </div>
        <div>
          <h3 className="text-[30px] lg:text-[48px] text-center md:text-start  leading-[45px] lg:leading-[67px] font-[600] ">
            Galileo Capital is regulated in Costa Rica and United States
          </h3>
          <div className="flex items-center justify-center md:justify-start md:items-start">
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
                  className="block px-4 py-2  hover:bg-[#28C0F5] duration-300 hover:text-white"
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
        </div>
      </div>
    </div>
  );
};

export default About;
