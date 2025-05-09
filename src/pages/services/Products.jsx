import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import useCart from "../../hooks/useCart";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (location.state?.showSuccess) {
      toast.success("Login successful! Welcome to the products page.", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate, location.pathname]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Producto agregado al carrito correctamente!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div
      className="flex flex-col items-center w-full"
      style={{ minHeight: "500px" }}
    >
      <ToastContainer />
      {loading ? (
        <p className="text-center text-lg">Cargando productos...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-screen-lg px-2 sm:px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-fourth/50 p-4 flex flex-col items-center shadow rounded-lg"
              style={{
                width: "220px",
                height: "320px", 
              }}
            >
              <div
                className="w-full flex justify-center mb-2"
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="flex flex-col items-center text-center flex-grow"
                style={{
                  height: "100px",
                }}
              >
                <h1
                  className="font-bold text-xs sm:text-sm md:text-base"
                  style={{
                    fontSize: "0.9rem",
                  }}
                >
                  {product.name}
                </h1>
                <p className="font-semibold text-xs sm:text-sm md:text-base">
                  {`Precio: $${product.salePrice}`}
                </p>
              </div>
              <div
                className="mt-auto w-full"
                style={{
                  position: "relative",
                }}
              >
                <button
                  className="btn btn-sixth p-2 w-full text-xs sm:text-sm truncate"
                  onClick={() => handleAddToCart(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;