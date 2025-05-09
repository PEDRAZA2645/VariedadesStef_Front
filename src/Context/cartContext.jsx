import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';

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
  return {
    cartItems,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
  };
};

export default useCart;