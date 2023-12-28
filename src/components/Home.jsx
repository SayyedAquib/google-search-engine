import Logo from "../assets/google-logo.png";
import { FEELING_LUCKY_URL } from "../utils/Constants";
import Footer from "./Footer";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col bg-white dark:bg-[#3C3C3C]">
      <HomeHeader />

      <main className="grow flex justify-center ">
        <div className="w-full px-5 flex flex-col items-center mt-40 sm:mt-20">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
          <div className="flex gap-2 text-[#3c4043] mt-8">
            <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] dark:border-[#505152] hover:shadow-c2 dark:bg-[#181A1B]  dark:text-white">
              Google Search
            </button>
            <button
              onClick={() => {
                window.open(FEELING_LUCKY_URL);
              }}
              className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] dark:border-[#505152]  hover:shadow-c2 dark:bg-[#181A1B] dark:text-white"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
