import React from "react";

const Orders = () => {
  return (
    <div
      className="tab-pane fade"
      id="tab-orders"
      role="tabpanel"
      aria-labelledby="tab-orders-link"
    >
      <p>No order has been made yet.</p>
      <a href="category.html" className="btn btn-outline-primary-2">
        <span>GO SHOP</span>
        <i className="icon-long-arrow-right" />
      </a>
      <br />
      <br />
      <table className="table table-cart table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-col">
              <div className="product">
                <figure className="product-media">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-3/products/product-3.jpg"
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
            <td className="quantity-col text-center">1 </td>
            <td className="total-col text-center">$84.00</td>
          </tr>
          <tr>
            <td className="product-col">
              <div className="product">
                <figure className="product-media">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-3/products/product-2.jpg"
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
            <td className="quantity-col text-center">1</td>
            <td className="total-col text-center">$76.00 </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
