import React from "react";

const ProductsList = () => {
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("/assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">Product</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product
            </li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="toolbox">
                <div className="toolbox-left">
                  <div className="toolbox-info">
                    {" "}
                    Showing <span>9 of 56</span> Products{" "}
                  </div>
                </div>
                <div className="toolbox-right">
                  <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                      <select
                        name="sortby"
                        id="sortby"
                        className="form-control"
                      >
                        <option value="popularity" selected>
                          Most Popular
                        </option>
                        <option value="pricelow">Price Low to High</option>
                        <option value="pricehight">Price Hight to Low </option>
                        <option value="newest">Newest</option>
                        <option value="rating">Most Rated</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products mb-3">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product-detail.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            MacBook Pro 13" Display, i5
                          </a>
                        </h3>
                        <div className="product-price"> $1,199.99 </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product-detail.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            Bose - SoundLink Bluetooth Speaker
                          </a>
                        </h3>
                        <div className="product-price"> $79.99 </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-new">
                          New
                        </span>
                        <a href="product-detail.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-13.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                          </a>
                        </h3>
                        <div className="product-price"> $899.99 </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product-detail.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-14.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            Google - Pixel 3 XL 128GB
                          </a>
                        </h3>
                        <div className="product-price">
                          <span className="new-price">$35.41</span>
                          <span className="old-price">Was $41.67</span>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product-detail.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-15.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            Samsung - 55" Class LED 2160p Smart
                          </a>
                        </h3>
                        <div className="product-price"> $899.99 </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                          </div>
                          <span className="ratings-text">( 5 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product-detail.html">
                          <img
                            src="/assets/images/demos/demo-3/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                        </div>
                        <div className="product-action product-action-dark">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                        </div>
                      </figure>
                      <div className="product-body">
                        <h3 className="product-title">
                          <a href="product-detail.html">
                            MacBook Pro 13" Display, i5
                          </a>
                        </h3>
                        <div className="product-price"> $1,199.99 </div>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a
                      className="page-link page-link-prev"
                      href="#"
                      aria-label="Previous"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      <span aria-hidden="true">
                        <i className="icon-long-arrow-left" />
                      </span>
                      Prev{" "}
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item-total">of 6</li>
                  <li className="page-item">
                    <a
                      className="page-link page-link-next"
                      href="#"
                      aria-label="Next"
                    >
                      {" "}
                      Next{" "}
                      <span aria-hidden="true">
                        <i className="icon-long-arrow-right" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <aside className="col-lg-3 order-lg-first">
              <div className="sidebar sidebar-shop">
                <div className="widget widget-clean">
                  <label>Filters:</label>
                  <a href="#" className="sidebar-filter-clear">
                    Clean All
                  </a>
                </div>
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-1"
                    >
                      {" "}
                      Category{" "}
                    </a>
                  </h3>
                  <div className="collapse show" id="widget-1">
                    <div className="widget-body">
                      <div className="filter-items filter-items-count">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-1"
                            >
                              TV
                            </label>
                          </div>
                          <span className="item-count">3</span>
                        </div>
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-2"
                            >
                              Computers
                            </label>
                          </div>
                          <span className="item-count">0</span>
                        </div>
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-3"
                            >
                              Tablets &amp; Cell Phones
                            </label>
                          </div>
                          <span className="item-count">4</span>
                        </div>
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-4"
                            >
                              Smartwatches
                            </label>
                          </div>
                          <span className="item-count">2</span>
                        </div>
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-5"
                            >
                              Accessories
                            </label>
                          </div>
                          <span className="item-count">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-5"
                    >
                      {" "}
                      Price{" "}
                    </a>
                  </h3>
                  <div className="collapse show" id="widget-2">
                    <div className="widget-body">
                      <div className="filter-price">
                        <div className="filter-price-text">
                          {" "}
                          Price Range: <span id="filter-price-range" />
                        </div>
                        <div id="price-slider" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsList;
