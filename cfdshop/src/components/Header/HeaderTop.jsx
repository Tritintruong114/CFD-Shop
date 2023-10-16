import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { MODAL_TYPE } from "../../config";
import { PATHS } from "../../config/path";
import { handleLogout, handleShowModal } from "../../slices/authSlice";
import { tokenMethod } from "../../ultils";

const HeaderTop = () => {
  // const { handleShowModal, handleLogout, profile, handleGetProfile } =
  //   useAuthContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { profile, showedModal } = useSelector((state) => state.auth);
  const { firstName, email } = profile || {};

  const _onShowAuthModal = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    // handleShowModal?.(MODAL_TYPES.login);
    dispatch(handleShowModal(MODAL_TYPE.login));
  };
  const _onSignOut = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  if (tokenMethod.get()?.accessToken) {
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
                  {email}
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
                      <li onClick={_onSignOut}>
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
            <li onClick={_onShowAuthModal}>
              <a style={{ cursor: "pointer" }} className="top-menu-login">
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
