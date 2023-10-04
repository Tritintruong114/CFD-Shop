import React from "react";

const CheckOutPage = () => {
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">Checkout</h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="product.html">Product</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
      </nav>
      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <div className="checkout-discount">
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  required
                  id="checkout-discount-input"
                />
                <label
                  htmlFor="checkout-discount-input"
                  className="text-truncate"
                >
                  Have a coupon? <span>Click here to enter your code</span>
                </label>
              </form>
            </div>
            <form action="#" className="checkout-form">
              <div className="row">
                <div className="col-lg-9">
                  <h2 className="checkout-title">Billing Details</h2>
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Full Name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-sm-4">
                      <label>Phone number *</label>
                      <input
                        type="text"
                        className="form-control input-error"
                        required
                      />
                      <p className="form-error">Please fill in this field</p>
                    </div>
                    <div className="col-sm-4">
                      <label>Email address *</label>
                      <input type="email" className="form-control" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <label>Province/City *</label>
                      <div className="select-custom">
                        <select
                          className="form-control form-select"
                          id="city"
                          aria-label="Default select example"
                        >
                          <option selected />
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label>District/Town *</label>
                      <div className="select-custom">
                        <select
                          className="form-control form-select"
                          id="district"
                        >
                          <option selected />
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <label>Ward *</label>
                      <div className="select-custom">
                        <select className="form-control form-select" id="ward">
                          <option selected />
                        </select>
                      </div>
                    </div>
                  </div>
                  <label>Street address *</label>
                  <input
                    type="text"
                    className="form-control input-error"
                    placeholder="House number and Street name"
                    required
                  />
                  <p className="form-error">Please fill in this field</p>
                  <label>Order notes (optional)</label>
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={4}
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    defaultValue={""}
                  />
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkout-create-acc"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkout-create-acc"
                    >
                      Create an account?
                    </label>
                  </div>
                </div>
                <aside className="col-lg-3">
                  <div className="summary">
                    <h3 className="summary-title">Your Order</h3>
                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="#">Beige knitted elastic runner shoes</a>
                          </td>
                          <td>$84.00</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#">Blue utility pinafore denimdress</a>
                          </td>
                          <td>$76,00</td>
                        </tr>
                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>$160.00</td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td>Free shipping</td>
                        </tr>
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>$160.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="accordion-summary" id="accordion-payment">
                      <div className="card">
                        <div className="card-header" id="heading-1">
                          <h2 className="card-title">
                            <a
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-1"
                              aria-expanded="true"
                              aria-controls="collapse-1"
                            >
                              {" "}
                              Direct bank transfer{" "}
                            </a>
                          </h2>
                        </div>
                        <div
                          id="collapse-1"
                          className="collapse show"
                          aria-labelledby="heading-1"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            {" "}
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order will not be shipped until the funds have
                            cleared in our account.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading-3">
                          <h2 className="card-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-3"
                              aria-expanded="false"
                              aria-controls="collapse-3"
                            >
                              {" "}
                              Cash on delivery{" "}
                            </a>
                          </h2>
                        </div>
                        <div
                          id="collapse-3"
                          className="collapse"
                          aria-labelledby="heading-3"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            Quisque volutpat mattis eros. Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                    >
                      <span className="btn-text">Place Order</span>
                      <span className="btn-hover-text">
                        Proceed to Checkout
                      </span>
                    </button>
                  </div>
                </aside>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckOutPage;
