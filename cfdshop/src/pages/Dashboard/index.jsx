import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import AccountDetail from "./AccountDetail";
import Orders from "./Orders";

const DashboardPage = () => {
  const { handleLogout, profile } = useAuthContext();
  const { email } = profile;
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">My Account</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <aside className="col-md-4 col-lg-3">
                <ul
                  className="nav nav-dashboard flex-column mb-3 mb-md-0"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="tab-account-link"
                      data-toggle="tab"
                      href="#tab-account"
                      role="tab"
                      aria-controls="tab-account"
                      aria-selected="false"
                    >
                      Account Details
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab-orders-link"
                      data-toggle="tab"
                      href="#tab-orders"
                      role="tab"
                      aria-controls="tab-orders"
                      aria-selected="false"
                    >
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab-address-link"
                      data-toggle="tab"
                      href="#tab-address"
                      role="tab"
                      aria-controls="tab-address"
                      aria-selected="false"
                    >
                      Adresses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab-wishlist-link"
                      data-toggle="tab"
                      href="#tab-wishlist"
                      role="tab"
                      aria-controls="tab-wishlist"
                      aria-selected="false"
                    >
                      Wishlist
                    </a>
                  </li> */}
                  <li onClick={() => handleLogout()} className="nav-item">
                    <a className="nav-link" href="#">
                      Sign Out
                    </a>
                  </li>
                </ul>
              </aside>
              <div className="col-md-8 col-lg-9">
                <div className="tab-content">
                  <AccountDetail {...profile} />
                  <Orders />
                  <div
                    className="tab-pane fade"
                    id="tab-address"
                    role="tabpanel"
                    aria-labelledby="tab-address-link"
                  >
                    <p>
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card card-dashboard">
                          <div className="card-body">
                            <h3 className="card-title">Billing Address</h3>
                            <p>
                              <strong>Fullname:</strong> Tran Nghia <br />
                              <strong>Email:</strong> {email} <br />
                              <strong>Phone number:</strong> 098 9596 912 <br />
                              <br />
                              <a href="#">
                                Edit <i className="icon-edit" />
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card card-dashboard">
                          <div className="card-body">
                            <h3 className="card-title">Shipping Address</h3>
                            <p>
                              Cecilia Chapman 711-2880 Nulla St. Mankato
                              Mississippi <br />
                              <br />
                              <a href="#">
                                Edit <i className="icon-edit" />
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-wishlist"
                    role="tabpanel"
                    aria-labelledby="tab-wishlist-link"
                  >
                    <table className="table table-wishlist table-mobile">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Stock Status</th>
                          <th />
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a href="#">
                                  <img
                                    src="assets/images/demos/demo-3/products/product-4.jpg"
                                    alt="Product image"
                                  />
                                </a>
                              </figure>
                              <h3 className="product-title">
                                <a href="#">Beige knitted</a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col text-center">$84.00</td>
                          <td className="stock-col text-center">
                            <span className="in-stock">In stock</span>
                          </td>
                          <td className="action-col">
                            <button className="btn btn-block btn-outline-primary-2">
                              <i className="icon-cart-plus" />
                              Add to Cart{" "}
                            </button>
                          </td>
                          <td className="remove-col">
                            <button className="btn-remove">
                              <i className="icon-close" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a href="#">
                                  <img
                                    src="assets/images/demos/demo-3/products/product-5.jpg"
                                    alt="Product image"
                                  />
                                </a>
                              </figure>
                              <h3 className="product-title">
                                <a href="#">Blue utility</a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col text-center">$76.00</td>
                          <td className="stock-col text-center">
                            <span className="in-stock">In stock</span>
                          </td>
                          <td className="action-col">
                            <button className="btn btn-block btn-outline-primary-2">
                              <i className="icon-cart-plus" />
                              Add to Cart{" "}
                            </button>
                          </td>
                          <td className="remove-col">
                            <button className="btn-remove">
                              <i className="icon-close" />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a href="#">
                                  <img
                                    src="assets/images/demos/demo-3/products/product-6.jpg"
                                    alt="Product image"
                                  />
                                </a>
                              </figure>
                              <h3 className="product-title">
                                <a href="#">Orange saddle lock</a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col text-center">$52.00</td>
                          <td className="stock-col text-center">
                            <span className="out-of-stock">Out of stock</span>
                          </td>
                          <td className="action-col">
                            <button className="btn btn-block btn-outline-primary-2 disabled">
                              Out of Stock
                            </button>
                          </td>
                          <td className="remove-col">
                            <button className="btn-remove">
                              <i className="icon-close" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
