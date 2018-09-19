import React from 'react';
import SearchBar from './components/search-bar/search-bar';
import ProductsList from './components/products-list/products-list';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={SearchBar}/>
            <Route path="/products" component={ProductsList}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
