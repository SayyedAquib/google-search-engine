import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

export const menu = [
  { name: "All", icon: <GoSearch /> },
  { name: "Images", icon: <BsImage size={14} /> },
  { name: "News", icon: <BiNews /> },
  { name: "Videos", icon: <RiVideoLine /> },
  { name: "Shopping", icon: <SlTag size={14} /> },
];

export const quickLinks = [
  "About",
  "Advertising",
  "Business",
  "How Search works",
];

export const settingMenu = ["Privacy", "Terms", "Settings"];

export const pagination = [
  { page: 1, startIndex: 1 },
  { page: 2, startIndex: 11 },
  { page: 3, startIndex: 21 },
  { page: 4, startIndex: 31 },
  { page: 5, startIndex: 41 },
  { page: 6, startIndex: 51 },
  { page: 7, startIndex: 61 },
  { page: 8, startIndex: 71 },
  { page: 9, startIndex: 81 },
  { page: 10, startIndex: 91 },
];

export const GMAIL_URL = "https://www.google.com/gmail/about/";

export const FEELING_LUCKY_URL = "https://doodles.google/";

export const GOOGLE_APPS_URL = "https://about.google/products/";

export const ABOUT_URL =
  "https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1";

export const ADVERTISING_URL =
  "https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1";

export const BUSINESS_URL = "https://www.google.com/intl/en_in/business/";

export const HOW_SEARCH_WORKS_URL =
  "https://www.google.com/search/howsearchworks/?fg=1";

export const PRIVACY_URL = "https://policies.google.com/privacy?hl=en-IN&fg=1";

export const TERMS_URL = "https://policies.google.com/terms?hl=en-IN&fg=1Z";
