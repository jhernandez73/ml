import React from 'react';
import Header from './components/header/header';
import ProductsList from './components/products-list/products-list';
import ProductDetails from './components/product-details/product-details';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" />
          <Route path="/products" component={ProductsList} />
          <Route path="/products/:id" component={ProductDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
