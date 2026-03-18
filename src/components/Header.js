import React from 'react';
import './Header.css';

const Header = ({ cartItemCount, onCartIconClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">QuickCart</h1>
        <div className="header-actions">
          <button className="cart-icon" onClick={onCartIconClick}>
            <span className="cart-icon-text">🛒</span>
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;