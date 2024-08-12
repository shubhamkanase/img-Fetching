
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDogHistory } from '../features/dogSlice';

const History = () => {
  const history = useSelector(selectDogHistory);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Image History</h1>
      <div style={styles.grid}>
        {history.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Dog ${index}`} style={styles.image} />
        ))}
      </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px',
    padding: '0 20px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default History;
