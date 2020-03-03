import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainReduxNavigation';
// import { addProductToCart } from '../store/actions';

import Products from "../components/Products";

class ContextDemoProducts extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {context => (
          <>
            {/*<MainNavigation*/}
            {/*  cartItemNumber={context.cart.reduce((count, curItem) => {*/}
            {/*    return count + curItem.quantity;*/}
            {/*  }, 0)}*/}
            {/*/>*/}
            <Products
              products={context.products}
              addToCartCallback={product => context.addProductToCart.bind(this, product)}
            />
          </>
        )}
      </ShopContext.Consumer>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

export default ContextDemoProducts;