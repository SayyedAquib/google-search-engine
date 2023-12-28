const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <div className="flex lg:ml-36 flex-col py-3 max-w-[700px]">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link, "_blank")}
      >
        <div className="text-sm truncate text-[#202124] dark:text-white">
          {data?.formattedUrl}
        </div>
        <div className="group-hover:underline text-xl text-[#1a0dab] dark:text-[#6997F4] pt-2">
          {data?.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] dark:text-white leading-6 pt-1"
        dangerouslySetInnerHTML={createMarkup(data?.htmlSnippet)}
      />
    </div>
  );
};

export default SearchedItemTemplate;
