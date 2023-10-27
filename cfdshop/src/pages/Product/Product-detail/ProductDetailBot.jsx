/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { transformNumberToPercent } from "../../../ultils/tranferNumberToPercent";
import { formatDate } from "../../../ultils/formatDate";

const TABS = {
  desc: "description",
  shipping: "shipping&return",
  review: "review",
};
const ProductDetailBot = ({ description, shippingReturn, reviews }) => {
  const [activeTab, setActiveTab] = useState(TABS.desc);
  const _onTabChange = (e, tab) => {
    e?.preventDefault();
    e?.stopPropagation();

    setActiveTab(tab);
  };
  return (
    <div className="product-details-tab" style={{ minHeight: "30vh" }}>
      <ul className="nav nav-pills justify-content-center" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === TABS.desc ? "active" : ""}`}
            href="#product-desc-tab"
            onClick={(e) => _onTabChange(e, TABS.desc)}
          >
            Description
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === TABS.shipping ? "active" : ""
            }`}
            href="#product-desc-tab"
            onClick={(e) => _onTabChange(e, TABS.shipping)}
          >
            Shipping & Returns
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === TABS.review ? "active" : ""}`}
            href="#product-desc-tab"
            onClick={(e) => _onTabChange(e, TABS.review)}
          >
            Reviews{`(${reviews?.length ?? 0})`}
          </a>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === TABS.desc && (
          <div
            className="tab-pane fade show active"
            id="product-desc-tab"
            role="tabpanel"
            aria-labelledby="product-desc-link"
          >
            <div className="product-desc-content">
              <h3>Product Information</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
          </div>
        )}
        {activeTab === TABS.shipping && (
          <div
            className="tab-pane fade show active"
            id="product-desc-tab"
            role="tabpanel"
            aria-labelledby="product-desc-link"
          >
            <div className="product-desc-content">
              <h3>Shipping & Returns</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: shippingReturn,
                }}
              />
            </div>
          </div>
        )}
        {activeTab === TABS.review && (
          <div
            className="tab-pane fade show active"
            id="product-desc-tab"
            role="tabpanel"
            aria-labelledby="product-desc-link"
          >
            <div className="product-desc-content">
              <h3>
                {reviews?.length
                  ? `(Review ${reviews?.length})`
                  : "There no review"}
              </h3>
              {reviews?.map((review, index) => {
                const {
                  id,
                  rate,
                  order,
                  title,
                  updateAt,
                  description: reviewDesc,
                } = review || {};
                return (
                  <div className="review" key={index}>
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">#{order.slice(-4)}</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{
                                width: `${transformNumberToPercent(rate)}`,
                              }}
                            />
                          </div>
                        </div>
                        <span className="review-date">
                          {formatDate(updateAt)}
                        </span>
                      </div>
                      <div className="col">
                        <div className="review-content">
                          <h2>{title}</h2>
                          <p>{reviewDesc}</p>
                        </div>
                        <div className="review-action">
                          <a>
                            <i className="icon-thumbs-up" />
                            Helpful (2)
                          </a>
                          <a>
                            <i className="icon-thumbs-down" />
                            Helpful (2)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                dangerouslySetInnerHTML={{
                  __html: reviews,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailBot;
