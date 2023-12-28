import React from "react";
import { ABOUT_URL, ADVERTISING_URL, BUSINESS_URL, HOW_SEARCH_WORKS_URL, PRIVACY_URL, TERMS_URL, quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {

  const handleClickOnMenu = (menu) => {
    switch (menu) {
      case "About":
        window.open(ABOUT_URL);
        console.log(quickLinks);
        break;
      case "Advertising":
        window.open(ADVERTISING_URL);
        break;
      case "Business":
        window.open(BUSINESS_URL);
        break;
      case "How Search works":
        window.open(HOW_SEARCH_WORKS_URL);
        break;
    }
  }

  const handleClickOnSettingMenu = (menu) => {
    switch (menu) { 
      case "Privacy":
        window.open(PRIVACY_URL);
        break;
      case "Terms":
        window.open(TERMS_URL);
        break;
    }
  }

  return (
    <footer className="bg-[#f2f2f2] dark:bg-[#464646]">
      <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0] dark:border-gray-500">
        <span className="text-[#70757a] dark:text-[#d5d7d8] text-[15px] leading-none">
          India
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] border-b border-[#dadce0] dark:border-gray-500">
        <div className="flex justify-center">
          {quickLinks.map((menu, index) => (
            <span
              onClick={() => handleClickOnMenu(menu)}
              key={index}
              className="text-[#70757a] dark:text-[#d5d7d8] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] hover:underline cursor-pointer"
            >
              {menu}
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          {settingMenu.map((menu, index) => (
            <span
              onClick={() => handleClickOnSettingMenu(menu)}
              key={index}
              className="text-[#70757a] dark:text-[#d5d7d8] text-[12px] md:text-[14px] leading-none p-[10px] md:p-[15px] hover:underline cursor-pointer"
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
