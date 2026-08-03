import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThankYouPage({setCart}) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/");
    }, 3000);

  }, []);

  return (
    <section className="py-5">
      <div className="container text-center py-5">
        <i className="bi bi-check-circle-fill text-warning display-1"></i>

        <h1 className="fw-bold mt-4">
          Thank You!
        </h1>

        <p className="text-muted fs-5">
          Your order has been placed successfully.
        </p>

        <p className="text-muted">
          Redirecting to the home page...
        </p>
      </div>
    </section>
  );
}

export default ThankYouPage;
