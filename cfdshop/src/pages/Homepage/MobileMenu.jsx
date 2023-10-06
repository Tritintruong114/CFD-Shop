import { NavLink } from "react-router-dom";
import { PATHS } from "../../config/path";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-wrapper">
        <span className="mobile-menu-close">
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
          <li className="nav-item">
            <a
              className="nav-link active"
              id="mobile-menu-link"
              data-toggle="tab"
              href="#mobile-menu-tab"
              role="tab"
              aria-controls="mobile-menu-tab"
              aria-selected="true"
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="mobile-cats-link"
              data-toggle="tab"
              href="#mobile-cats-tab"
              role="tab"
              aria-controls="mobile-cats-tab"
              aria-selected="false"
            >
              Categories
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="mobile-menu-tab"
            role="tabpanel"
            aria-labelledby="mobile-menu-link"
          >
            <nav className="mobile-nav">
              <ul className="mobile-menu">
                <li className="active">
                  <NavLink to={PATHS.HOME}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={PATHS.ABOUT}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={PATHS.PRODUCTS}>Product</NavLink>
                </li>
                <li>
                  <NavLink to={PATHS.BLOGS}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to={PATHS.CONTACT}>Contact Us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="tab-pane fade"
            id="mobile-cats-tab"
            role="tabpanel"
            aria-labelledby="mobile-cats-link"
          >
            <nav className="mobile-cats-nav">
              <ul className="mobile-cats-menu">
                <li>
                  <a className="mobile-cats-lead" href="#">
                    TV
                  </a>
                </li>
                <li>
                  <a href="#">Computers</a>
                </li>
                <li>
                  <a href="#">Tablets &amp; Cell Phones</a>
                </li>
                <li>
                  <a href="#">Smartwatches</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="social-icons">
          <a href="#" className="social-icon" target="_blank" title="Facebook">
            <i className="icon-facebook-f" />
          </a>
          <a href="#" className="social-icon" target="_blank" title="Twitter">
            <i className="icon-twitter" />
          </a>
          <a href="#" className="social-icon" target="_blank" title="Instagram">
            <i className="icon-instagram" />
          </a>
          <a href="#" className="social-icon" target="_blank" title="Youtube">
            <i className="icon-youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
