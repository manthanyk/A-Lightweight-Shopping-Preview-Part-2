import React from 'react';
import CartItem from './CartItem';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveFromCart, onUpdateQuantity, totalPrice }) => {
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <CartItem 
                  key={item.id}
                  item={item}
                  onRemove={onRemoveFromCart}
                  onUpdateQuantity={onUpdateQuantity}
                />
              ))}
              <div className="cart-total">
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;