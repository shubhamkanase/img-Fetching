
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/dogSlice';

const AddToCart = () => {
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const currentDog = useSelector((state) => state.dog.currentDog);
  const cart = useSelector((state) => state.dog.cart);

  const handleAddToCart = () => {
    if (currentDog && price) {
      dispatch(addToCart({ image: currentDog, price }));
      setPrice('');
    }
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add to Cart</h1>
      {currentDog && <img src={currentDog} alt="Current dog" style={styles.currentDogImage} />}
      <div style={styles.formContainer}>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          style={styles.input}
        />
        <button onClick={handleAddToCart} style={styles.button}>
          Add to Cart
        </button>
      </div>

      <h2 style={styles.cartTitle}>Cart</h2>
      <ul style={styles.cartList}>
        {cart.map((item, index) => (
          <li key={index} style={styles.cartItem}>
            <img src={item.imageUrl} alt={`Dog ${index + 1}`} style={styles.cartImage} />
            <p style={styles.cartPrice}>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <h3 style={styles.total}>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  currentDogImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    marginBottom: '20px',
  },
  formContainer: {
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginRight: '10px',
    width: '150px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#021526',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#06D001',
  },
  cartTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  cartList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
  },
  cartImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginRight: '15px',
  },
  cartPrice: {
    fontSize: '1rem',
    color: '#333',
  },
  total: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '20px',
  },
};

export default AddToCart;
