import React, { Suspense, lazy, useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../utils/ContextApi";
import { fetchDataFromApi } from "../utils/api";
import Footer from "./Footer";
import Pagination from "./Pagination";
import SearchResultHeader from "./SearchResultHeader";
import Loader from "./Loader";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import SearchedItemTemplate from "./SearchedItemTemplate";

// Dynamic imports
// const SearchedItemTemplate = lazy(() => import("./SearchedItemTemplate"));
// const SearchedImageItemTemplate = lazy(() =>
//   import("./SearchedImageItemTemplate")
// );

const SearchResult = () => {
  const { query, startIndex } = useParams();
  const { imageSearch, result, setResult } = useContext(Context);

  useEffect(() => {
    fetchSearchResults();
    window.scrollTo(0, 0);
  }, [query, startIndex, imageSearch]);

  const fetchSearchResults = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  if (!result) return;
  const { items, queries, searchInformation } = result;

  return (
    <div className="flex dark:bg-[#3C3C3C] flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        {!imageSearch ? (
          <>
            <div className="flex lg:ml-36 text-sm text-[#70757a] dark:text-white mb-3">
              {`About ${searchInformation?.formattedTotalResults} 
              results in (${searchInformation?.formattedSearchTime})`}
            </div>
            {items.map((item, index) => (
              <SearchedItemTemplate key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 ">
            {items.map((item, index) => (
              <SearchedImageItemTemplate key={index} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={queries} />
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
