import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { tokenMethod } from "../../ultils";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../config/path";
import { MODAL_TYPE } from "../../config";

const HeaderTop = () => {
  const { handleShowModal } = useAuthContext();

  if (tokenMethod.get("token")) {
    return (
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <a href="tel:0989596912">
              <i className="icon-phone" /> Hotline: 098 9596 912{" "}
            </a>
          </div>
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#" className="top-link-menu">
                  <i className="icon-user" />
                  Tran Nghia{" "}
                </a>
                <ul>
                  <li>
                    <ul>
                      <li>
                        <NavLink to={PATHS.DASHBOARD}>Account Details</NavLink>
                      </li>
                      <li>
                        <NavLink to={PATHS.DASHBOARD}>Your Orders</NavLink>
                      </li>
                      <li>
                        <NavLink to={PATHS.DASHBOARD}>
                          Wishlist <span>(3)</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={PATHS.HOME}>Sign Out</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:0989596912">
            <i className="icon-phone" /> Hotline: 098 9596 912{" "}
          </a>
        </div>
        <div className="header-right">
          {/* Not LogIn */}
          <ul className="top-menu top-link-menu">
            <li onClick={() => handleShowModal(MODAL_TYPE.register)}>
              <a className="top-menu-login">
                <i className="icon-user"></i>Login | Resgister{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
