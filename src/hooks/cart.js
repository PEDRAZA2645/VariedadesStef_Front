import { useState } from 'react';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);

    const addToCart = (product) => {
        try {
            setCartItems((prevItems) => {
                const existingItem = prevItems.find((item) => item.id === product.id);
                if (existingItem) {
                    return prevItems.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                }
                return [...prevItems, { ...product, quantity: 1 }];
            });
        } catch (error) {
            console.error('Error al agregar al carrito:', error);
            setError('Error al agregar el producto al carrito');
        }
    };

    const removeFromCart = (productId) => {
        try {
            setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
        } catch (error) {
            console.error('Error al eliminar del carrito:', error);
            setError('Error al eliminar el producto del carrito');
        }
    };

    const updateItemQuantity = (productId, quantity) => {
        try {
            if (quantity <= 0) {
                removeFromCart(productId);
            } else {
                setCartItems((prevItems) =>
                    prevItems.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    )
                );
            }
        } catch (error) {
            console.error('Error al actualizar la cantidad del producto:', error);
            setError('Error al actualizar la cantidad del producto');
        }
    };

    const clearCart = () => {
        try {
            setCartItems([]);
        } catch (error) {
            console.error('Error al limpiar el carrito:', error);
            setError('Error al limpiar el carrito');
        }
    };

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        clearCart,
        error,
    };
};

export default useCart;