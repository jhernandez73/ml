import React from 'react';
import SearchBar from '../search-bar/search-bar';
import axios from 'axios';
 
export class ProductsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.getProducts(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.getProducts(nextProps);
    
  }
  getProducts(props) {
    axios.get(process.env.REACT_APP_API_URL + '/products' + props.location.search, {headers:{'Access-Control-Allow-Origin':'*'}})
    .then(response => {
      this.setState({
        products: response.data.results 
      })
    })
  }
  render() {
    const listItems = this.state.products.map((p) => <li key={p.id}>{p.title}, {p.price.amount}</li>);
    return (
      <div>
        <SearchBar />
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
