import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-5 col-md-6">
            <h2 className="fw-bold mb-3">
              <i className="bi bi-bag-check-fill me-2"></i>
              Shoply
            </h2>

            <p className="text-white-50 mb-4">
              Your simple and modern online shopping experience.
              Discover quality products at great prices.
            </p>

            <div className="d-flex gap-3">
              <a
                href="#"
                className="text-white fs-4"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                className="text-white fs-4"
                aria-label="X"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="#"
                className="text-white fs-4"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="#"
                className="text-white fs-4"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                target="_blank"
                href="https://github.com/MohammadRabe/Projects/tree/main/finalProject"
                className="text-white fs-4"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  to="/"
                  className="text-white-50 text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-3">
                <a
                  href="/#products"
                  className="text-white-50 text-decoration-none"
                >
                  Products
                </a>
              </li>

              <li className="mb-3">
                <Link
                  to="/cart"
                  className="text-white-50 text-decoration-none"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">About Shoply</h5>

            <p className="text-white-50 mb-2">
              React eCommerce Final Project
            </p>

            <p className="text-white-50 mb-0">
              Built with React, Bootstrap and modern web technologies.
            </p>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <small className="text-white-50">
            © {new Date().getFullYear()} Shoply. All rights reserved.
          </small>

          <small className="text-white-50">
            Built with ❤️ using React
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
