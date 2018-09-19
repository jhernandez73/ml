import React from 'react';
import { withRouter } from 'react-router-dom'; 
import './_search-bar.scss';

export class SearchBar extends React.Component {
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
      <div className='row search-container'>
        <form onSubmit={this.handleSubmit} className='search-box'>
            <input
              className='red'
              type='text'
              placeholder='Search...'
              onChange={this.onChange}
            />
            <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);