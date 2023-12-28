import React, { createContext, useState } from "react";
import { pagination } from "../utils/Constants";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const AppContext = (props) => {
  const [imageSearch, setImageSearch] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("All");
  const [result, setResult] = useState();
  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();

  return (
    <Context.Provider
      value={{
        imageSearch,
        setImageSearch,
        selectedMenu,
        setSelectedMenu,
        result,
        setResult,
        page,
        setPage,
        navigate
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
