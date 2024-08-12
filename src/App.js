
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Header from './Header';
import Home from './components/Home';
import AddToCart from './components/AddToCart';
import History from './components/History'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/cart" element={<AddToCart />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
