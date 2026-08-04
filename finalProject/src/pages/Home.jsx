import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import productsData from "../data/products.json";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setMaxPrice(1000);
  };

  return (
    <>
      <section className="hero-section py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="text-warning fw-bold mb-2">
                WELCOME TO Shoply
              </p>

              <h1 className="display-4 fw-bold">
                Everything you need, in one place.
              </h1>

              <p className="lead text-white-50">
                Browse our products, view their details and add your
                favorites to your shopping cart.
              </p>

              <a href="#products" className="btn btn-warning btn-lg">
                Shop Now
              </a>
            </div>

            <div className="col-lg-5 text-center d-none d-lg-block">
              <i className="bi bi-bag-check display-1 text-warning"></i>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="container py-5">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="card filter-card shadow-sm border-0">
              <div className="card-body">
                <h5 className="fw-bold mb-4">
                  <i className="bi bi-funnel me-2"></i>
                  Search & Filter
                </h5>

                <label className="form-label">
                  Search by title
                </label>

                <div className="input-group mb-4">
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <label className="form-label">
                  Category
                </label>

                <select
                  className="form-select mb-4"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item === "all" ? "All Categories" : item}
                    </option>
                  ))}
                </select>

                <label className="form-label">
                  Maximum Price: ${maxPrice}
                </label>

                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="1000"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />

                <button
                  className="btn btn-outline-secondary w-100 mt-3"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="fw-bold mb-1">
                  Our Products
                </h2>

                <p className="text-muted mb-0">
                  {filteredProducts.length} product(s) found
                </p>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="alert alert-warning">
                No products match your search or filters.
              </div>
            ) : (
              <div className="row g-4">
                {filteredProducts.map((product) => (
                  <div
                    className="col-sm-6 col-xl-4"
                    key={product.id}
                  >
                      <ProductCard
                        product={product}
                        addToCart={addToCart}
                      />

                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
