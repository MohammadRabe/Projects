import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="py-5">
        <div className="container">

          <button
            className="btn btn-outline-secondary mb-4"
            onClick={() => navigate("/cart")}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Cart
          </button>

          <div className="mb-4">
            <p className="text-warning fw-bold mb-2">
              SHOPEASE CHECKOUT
            </p>

            <h1 className="fw-bold">
              Checkout
            </h1>

            <p className="text-muted">
              Complete your information to place your order.
            </p>
          </div>

          <div className="row g-4">

            
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                  <h4 className="fw-bold mb-4">
                    Customer Information
                  </h4>

                  <div className="mb-3">
                    <label className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Address
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your address"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      Phone
                    </label>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your phone number"
                    />
                  </div>

                  <Link className="btn btn-warning w-100 btn-lg" to="/thank-you">
                    Place Order
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                  <h4 className="fw-bold mb-4">
                    Order Summary
                  </h4>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal</span>
                    <strong>$99.99</strong>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Shipping</span>
                    <strong>$10.00</strong>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">
                      Total
                    </h5>

                    <h5 className="fw-bold text-warning">
                      $109.99
                    </h5>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default CheckoutPage;
