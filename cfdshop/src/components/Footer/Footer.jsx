import { NavLink } from "react-router-dom";
import { PATHS } from "../../config/path";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-5">
              <div className="widget widget-about">
                <img
                  src="assets/images/logo.svg"
                  className="footer-logo"
                  alt="Footer Logo"
                  width={120}
                />
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat.{" "}
                </p>
                <div className="widget-call">
                  <i className="icon-phone" /> Got Question? Call us 24/7{" "}
                  <NavLink to="tel:#">098 9596 912</NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 offset-lg-1">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>
                <ul className="widget-list">
                  <li>
                    <NavLink to={PATHS.ABOUT}>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRODUCTS}>Product</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.FAQ}>FAQs</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.CONTACT}>Contact us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                <ul className="widget-list">
                  <li>
                    <NavLink to={PATHS.PAYMENT}>Payment Methods</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.RETURN}>Returns</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.SHIPPING}>Shipping</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.PRIVACY}>Privacy Policy</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="widget-list">
                  <li>
                    <NavLink to={PATHS.DASHBOARD}>Account Details</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.CART}>View Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.DASHBOARD}>My Wishlist</NavLink>
                  </li>
                  <li>
                    <NavLink to={PATHS.DASHBOARD}>Track My Order</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2023{" "}
            <NavLink
              to="https://cfdcircle.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>CFD Circle</strong>
            </NavLink>
            . All Rights Reserved.
          </p>
          <figure className="footer-payments">
            <img
              src="assets/images/payments.png"
              alt="Payment methods"
              width={272}
              height={20}
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
