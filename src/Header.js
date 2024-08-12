
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkStyle = (link) => ({
    ...styles.navLink,
    color: hoveredLink === link ? '#06D001' : '#fff',
  });

  return (
    <header style={styles.header}>
      <img src="/img/logo.png" alt="Dog logo" style={styles.logo} />
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link
              to="/"
              style={linkStyle('home')}
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/history"
              style={linkStyle('history')}
              onMouseEnter={() => handleMouseEnter('history')}
              onMouseLeave={handleMouseLeave}
            >
              History
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link
              to="/cart"
              style={linkStyle('cart')}
              onMouseEnter={() => handleMouseEnter('cart')}
              onMouseLeave={handleMouseLeave}
            >
              Add to Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


const styles = {
    header: {
      // backgroundColor: '#021526',
      backgroundColor: '#1A1A1B',
      padding: '10px 180px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      width: '100px', 
      height: '80px',
      cursor: 'pointer',
    },
    nav: {
      display: 'flex',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      gap: '30px',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginLeft: '20px',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'color 0.3s',
    },
  };
  

export default Header;
