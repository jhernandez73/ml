import React from 'react';
import axios from 'axios';
import './product-item.scss';

export class ProductItem extends React.Component {
  render() {
    return (
      <div className='container item'>
        <div className='row'>
            <div className='item-image'>
              <img src={this.props.img} />
            </div>
            <div className='item-description'>
              <span className='item-price'>$ {this.props.price}</span>
              <br />
              <span className='item-name'>{this.props.name}</span>
            </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
