import React from 'react';
import axios from 'axios';

export class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {}
    }
  }
  componentWillMount() {
    const { match: { params } } = this.props;
    console.log('params', params);
    this.getProduct(params.id);
  }
  getProduct(id) {
    axios.get(process.env.REACT_APP_API_URL + '/products/' + id, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        this.setState({
          product: response.data
        });
        console.log(this.state);
      })
  }
  render() {
    return (
      <div className='details-container'>
        <div className='details-img'>
          <img src={this.state.product} />
        </div>
        <div className='details-img'>
          <img src={this.state.product} />
        </div>
        <div className='details-img'>
          <img src={this.state.product} />
        </div>
      </div>
    );
  }
}

export default ProductDetails;
