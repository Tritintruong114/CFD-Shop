/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [isShowNavBar, setIsShowNavBar] = useState(false);

  useEffect(() => {
    //
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setIsShowNavBar(false);
  }, [pathname]);

  const handleShowNavBar = (isShow) => {
    setIsShowNavBar(isShow);
  };

  return (
    <MainContext.Provider value={{ isShowNavBar, handleShowNavBar }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useMainContext = () => useContext(MainContext);
