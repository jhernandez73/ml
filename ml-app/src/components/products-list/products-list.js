import React from 'react';
import axios from 'axios';
import ProductItem from '../product-item/product-item';

export class ProductsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentWillMount() {
    this.getProducts(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.getProducts(nextProps);

  }
  getProducts(props) {
    axios.get(process.env.REACT_APP_API_URL + '/products' + props.location.search, { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(response => {
        this.setState({
          products: response.data.items
        })
      })
  }
  render() {
    const listItems = this.state.products.map(
      (p) => <ProductItem key={p.id}
        price={p.price.amount}
        name={p.title}
        condition={p.condition}
        img={p.picture} />
    );
    return (
      <div>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
              {listItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;
