import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/google-logo.png";
import { menu } from "../utils/Constants";
import { Context } from "../utils/ContextApi";
import ProfileIcon from "./ProfileIcon";
import SearchInput from "./SearchInput";

const SearchResultHeader = () => {
  const { setImageSearch, selectedMenu, setSelectedMenu } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem?.name === "Images";
    setImageSearch(isTypeImage ? true : false);
    setSelectedMenu(menuItem?.name);
  };

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] dark:border-gray-500 flex md:block flex-col items-center sticky top-0 bg-white dark:bg-[#3C3C3C]">
      <div className="flex items-center justify-between w-full">
        <div className="md:flex items-center grow">
          <Link to="/">
            <img
              className="block w-[92px] sm:mr-10 mx-auto my-3"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden sm:block">
          <ProfileIcon />
        </div>
      </div>

      <div className="flex mt-3 ml-[-10px] lg:ml-[134px]">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3 cursor-pointer relative ${
              selectedMenu === menu?.name
                ? "text-[#6997F4] dark:text-[#6997F4]"
                : "text-[#5f6368] dark:text-white"
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden sm:block mr-2">{menu?.icon}</span>
            <span className="text-sm">{menu?.name}</span>
            {selectedMenu === menu?.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
