import React from 'react';

export class ProductDetails extends React.Component {
  render() {
    const product = {
      author: {
        name: 'Juan',
        lastname: 'Hernandez'
      },
      item: {
        id: 1,
        title: 'perrito',
        price: {
          currency: 'ARS',
          amount: 500,
          decimals: 0
        },
        picture: 'https://www.google.com.ar/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwixuoeq2r3dAhWDfZAKHR5xCQwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.genbeta.com%2Fbuscadores%2Frevive-el-boton-de-ver-imagen-en-google-imagenes-con-estas-extensiones&psig=AOvVaw3RHLRbYNxjQKyEpQlOTVfW&ust=1537124821909178',
        condition: 'new',
        free_shipping: true,
        sold_quantity: 5,
        description: 'Este es un perrito'
      }
    }
    return (
      <div>
        <span>
          {product.item.id}
        </span>
        <span>
          {product.item.title}
        </span>
        <span>
          {product.item.price.amount}
        </span>
      </div>
    );
  }
}

export default ProductDetails;
