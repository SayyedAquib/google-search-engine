import { TbGridDots } from "react-icons/tb";
import favicon_google_logo from "../assets/favicon_google_logo.svg"
import ProfileRing from "../assets/profile-ring.svg";
import { GMAIL_URL, GOOGLE_APPS_URL } from "../utils/Constants";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots
          onClick={() => window.open(GOOGLE_APPS_URL)}
          size={20}
          className="dark:text-white text-[#5f6368]"
        />
      </span>
      <span className="h-10 w-10 relative flex justify-center items-center">
        <img
          onClick={() => window.open(GMAIL_URL)}
          className="absolute cursor-pointer"
          src={ProfileRing}
        />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={favicon_google_logo}
          />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
