import React from 'react';
import SearchBar from '../search-bar/search-bar';
import './_header.scss';
import mlLogo from './assets/ml-logo.png'

export class Header extends React.Component {
  // React components are simple functions that take in props and state, and render HTML
  constructor(props) {
    super(props);
    this.state = {searchValue: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  // Function that handles search
  handleSubmit(event) {
    if (this.state.searchValue) {  
      this.props.history.push(`/products?q=${this.state.searchValue}`);
    }
    event.preventDefault();
  };
  onChange(event){
    this.setState({
      searchValue: event.target.value
    })
  };
  render() {
    return (
      <div className='header-container container-fluid'>
        <div className='row'>
          <div className='ml-logo col-md-1 offset-md-3'>
            <a href="/" rel="home">
              <img src={mlLogo} alt="Mercado Libre" />
            </a>  
          </div>
          <div className='search-container col-md-3'>
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;