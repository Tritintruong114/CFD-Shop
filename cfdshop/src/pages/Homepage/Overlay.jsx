import React from "react";
import { useMainContext } from "../../context/MainContext";

const Overlay = () => {
  const { handleCloseMenu } = useMainContext();

  return <div onClick={handleCloseMenu} className="mobile-menu-overlay"></div>;
};

export default Overlay;
