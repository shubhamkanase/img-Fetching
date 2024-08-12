import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogImage, addToCart } from '../features/dogSlice';

const Home = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state) => state.dog.imageUrl);
  const [price, setPrice] = useState('');

  useEffect(() => {
    dispatch(fetchDogImage());
  }, [dispatch]);

  const handleFetchNewImage = () => {
    dispatch(fetchDogImage());
  };

  const handleAddToCart = () => {
    if (price && imageUrl) {
      dispatch(addToCart({ imageUrl, price: parseFloat(price) }));
      setPrice(''); 
      dispatch(fetchDogImage());
      alert('Image successfully added to cart!'); 
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Random Dog Image</h1>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Random Dog" style={styles.image} />
          <div>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              style={styles.priceInput}
            />
            <button onClick={handleAddToCart} style={styles.button}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
      <button onClick={handleFetchNewImage} style={styles.button}>
        Fetch New Image
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#021526',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  priceInput: {
    marginTop: '10px',
    padding: '5px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default Home;
