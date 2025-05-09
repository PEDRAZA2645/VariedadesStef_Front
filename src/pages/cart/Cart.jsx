import useCart from "../../hooks/useCart";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center w-full" style={{ minHeight: "500px" }}>
      <div className="w-full text-center mb-5">
        <h1 className="btn-sixth max-w-[150px] mx-auto p-2 mb-5">Mi Carrito</h1>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center w-full">El carrito está vacío</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-screen-lg px-2 sm:px-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
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
                  src={item.imageUrl}
                  alt={item.name}
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
                  {item.name}
                </h1>
                <p className="font-semibold text-xs sm:text-sm md:text-base">
                  {`Precio: $${item.salePrice}`}
                </p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="btn btn-sixth text-xs sm:text-sm px-2 mx-1"
                  >
                    -
                  </button>
                  <p className="text-xs sm:text-sm md:text-base">
                    {`Cantidad: ${item.quantity}`}
                  </p>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="btn btn-sixth text-xs sm:text-sm px-2 mx-1"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-auto w-full flex justify-between items-center">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="btn btn-sixth p-2 text-xs sm:text-sm truncate"
                  style={{ flex: "1", marginRight: "4px" }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="text-center w-full mt-5">
          <h2 className="font-bold text-lg">{`Total: $${totalPrice.toFixed(2)}`}</h2>
          <button
            onClick={handleClearCart}
            className="btn btn-danger mt-3 p-2 text-sm"
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;