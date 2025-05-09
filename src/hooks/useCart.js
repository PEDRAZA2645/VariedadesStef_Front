import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/cartSlice';

const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const incrementQuantityHandler = (productId) => {
    dispatch(incrementQuantity({ id: productId }));
  };

  const decrementQuantityHandler = (productId) => {
    dispatch(decrementQuantity({ id: productId }));
  };

  return {
    cartItems,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
    incrementQuantity: incrementQuantityHandler,
    decrementQuantity: decrementQuantityHandler,
  };
};

export default useCart;