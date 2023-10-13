import { NavLink } from "react-router-dom";
import { PATHS } from "../config/path";
import { useMainContext } from "../context/MainContext";

const MENULIST = [
  {
    name: "Home",
    path: PATHS.HOME,
  },
  {
    name: "About Us",
    path: PATHS.ABOUT,
  },

  {
    name: "Product",
    path: PATHS.PRODUCTS,
  },
  {
    name: "Blog",
    path: PATHS.BLOGS,
  },

  {
    name: "Contact Us",
    path: PATHS.CONTACT,
  },
];

const ACCESSORIES = [
  {
    name: "TV",
    path: PATHS.HOME,
  },
  {
    name: "Computers",
    path: PATHS.ABOUT,
  },

  {
    name: "Tablets & Cell Phones",
    path: PATHS.PRODUCTS,
  },
  {
    name: "Smartwatches",
    path: PATHS.BLOGS,
  },

  {
    name: "Accessories",
    path: PATHS.CONTACT,
  },
];

const MobileMenu = () => {
  const {
    handleCloseMenu,
    menuMobile,
    pathname,
    handleToggleTabPane,
    isTabPane,
  } = useMainContext();

  return (
    <>
      {menuMobile === true && (
        <div className="mobile-menu-container">
          <div className="mobile-menu-wrapper">
            <span onClick={handleCloseMenu} className="mobile-menu-close">
              <i className="icon-close" />
            </span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                className="form-control"
                name="mobile-search"
                id="mobile-search"
                placeholder="Search in..."
                required
              />
              <button className="btn btn-primary" type="submit">
                <i className="icon-search" />
              </button>
            </form>
            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
              <li
                onClick={() => handleToggleTabPane("home")}
                className="nav-item"
              >
                <a
                  className={`nav-link ${isTabPane === "home" ? "active" : ""}`}
                >
                  Menu
                </a>
              </li>
              <li
                onClick={() => handleToggleTabPane("categories")}
                className="nav-item"
              >
                <a
                  className={`nav-link
                ${isTabPane === "categories" ? "active" : ""}
                `}
                >
                  Categories
                </a>
              </li>
            </ul>
            <div className="tab-content">
              {/* Pages */}
              {isTabPane === "home" ? (
                <div
                  className="tab-pane fade active show"
                  id="mobile-menu-tab"
                  role="tabpanel"
                  aria-labelledby="mobile-menu-link"
                >
                  <nav className="mobile-nav">
                    <ul onClick={handleCloseMenu} className="mobile-menu">
                      {MENULIST.map((item, index) => (
                        <li
                          className={`${
                            pathname === item.path ? "active" : ""
                          }`}
                          key={index}
                        >
                          <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ) : (
                <div
                  className="tab-pane fade active show"
                  id="mobile-cats-tab"
                  role="tabpanel"
                  aria-labelledby="mobile-cats-link"
                >
                  <nav className="mobile-cats-nav">
                    <ul onClick={handleCloseMenu} className="mobile-cats-menu">
                      {ACCESSORIES.map((iten, index) => {
                        return (
                          <li key={index}>
                            <a className="mobile-cats-lead" href="#">
                              {iten.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Accessories */}
            </div>
            <div className="social-icons">
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Facebook"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Twitter"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Instagram"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Youtube"
              >
                <i className="icon-youtube" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
