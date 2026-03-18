import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import './App.css';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://via.placeholder.com/150x150?text=Headphones',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://via.placeholder.com/150x150?text=Smart+Watch',
    description: 'Feature-rich smartwatch with health monitoring'
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://via.placeholder.com/150x150?text=Speaker',
    description: 'Portable Bluetooth speaker with excellent sound quality'
  },
  {
    id: 4,
    name: 'Phone Charger',
    price: 24.99,
    image: 'https://via.placeholder.com/150x150?text=Charger',
    description: 'Fast charging cable for all devices'
  },
  {
    id: 5,
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://via.placeholder.com/150x150?text=Laptop+Stand',
    description: 'Ergonomic adjustable laptop stand'
  },
  {
    id: 6,
    name: 'USB Hub',
    price: 39.99,
    image: 'https://via.placeholder.com/150x150?text=USB+Hub',
    description: 'Multi-port USB hub for expanded connectivity'
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart or update quantity if already exists
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Calculate total items in cart
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="App">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartIconClick={() => setIsCartOpen(true)} 
      />
      <main>
        <ProductList products={sampleProducts} onAddToCart={addToCart} />
      </main>
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;