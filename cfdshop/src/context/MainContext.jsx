/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [isShowNavBar, setIsShowNavBar] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [isTabPane, setIsTabPane] = useState("home");

  useEffect(() => {
    //
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setMenuMobile(false);
  }, [pathname]);

  const handleCloseMenu = () => {
    window.document.body.classList.remove("mmenu-active");
    setMenuMobile(false);
  };

  const handleShowMenu = () => {
    window.document.body.classList.add("mmenu-active");
    setMenuMobile(true);
  };

  const handleToggleTabPane = (tab) => {
    setIsTabPane(tab);
  };
  return (
    <MainContext.Provider
      value={{
        isShowNavBar,
        menuMobile,
        setMenuMobile,
        handleCloseMenu,
        handleShowMenu,
        handleToggleTabPane,
        setIsShowNavBar,
        pathname,
        isTabPane,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useMainContext = () => useContext(MainContext);
