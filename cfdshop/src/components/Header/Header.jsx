import { NavLink } from "react-router-dom";
import { PATHS } from "../../config/path";
const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <a href="tel:0989596912">
              <i className="icon-phone" /> Hotline: 098 9596 912{" "}
            </a>
          </div>
          <div className="header-right">
            {/* Not LogIn */}
            {/* <ul class="top-menu top-link-menu">
                      <li><a href="#signin-modal" data-toggle="modal" class="top-menu-login"><i class="icon-user"></i>Login | Resgister </a></li>
                  </ul> */}
            {/* Logged In */}
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
      <div className="header-middle sticky-header">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars" />
            </button>
            <NavLink to={PATHS.HOME} className="logo">
              <img src="assets/images/logo.svg" alt="Molla Logo" width={160} />
            </NavLink>
          </div>
          <nav className="main-nav">
            <ul className="menu">
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
          <div className="header-right">
            <div className="header-search">
              <a
                href="#"
                className="search-toggle"
                role="button"
                title="Search"
              >
                <i className="icon-search" />
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper">
                  <label htmlFor="q" className="sr-only">
                    Search
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search in..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="dropdown cart-dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="icon-shopping-cart" />
                <span className="cart-count">2</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-cart-products">
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <NavLink href={PATHS.PRODUCTS_DETAIL}>
                          Beige knitted
                        </NavLink>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span> x $84.00{" "}
                      </span>
                    </div>
                    <figure className="product-image-container">
                      <NavLink
                        href={PATHS.PRODUCTS_DETAIL}
                        className="product-image"
                      >
                        <img
                          src="assets/images/products/cart/product-1.jpg"
                          alt="product"
                        />
                      </NavLink>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                  <div className="product">
                    <div className="product-cart-details">
                      <h4 className="product-title">
                        <NavLink href={PATHS.PRODUCTS_DETAIL}>
                          Blue utility
                        </NavLink>
                      </h4>
                      <span className="cart-product-info">
                        <span className="cart-product-qty">1</span> x $76.00{" "}
                      </span>
                    </div>
                    <figure className="product-image-container">
                      <NavLink
                        href={PATHS.PRODUCTS_DETAIL}
                        className="product-image"
                      >
                        <img
                          src="assets/images/products/cart/product-2.jpg"
                          alt="product"
                        />
                      </NavLink>
                    </figure>
                    <a href="#" className="btn-remove" title="Remove Product">
                      <i className="icon-close" />
                    </a>
                  </div>
                </div>
                <div className="dropdown-cart-total">
                  <span>Total</span>
                  <span className="cart-total-price">$160.00</span>
                </div>
                <div className="dropdown-cart-action">
                  <NavLink to={PATHS.CART} className="btn btn-primary">
                    View Cart
                  </NavLink>
                  <NavLink
                    to={PATHS.CHECKOUT}
                    className="btn btn-outline-primary-2"
                  >
                    <span>Checkout</span>
                    <i className="icon-long-arrow-right" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
