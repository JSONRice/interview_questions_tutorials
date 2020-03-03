import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/shop-context';
// import { removeProductFromCart } from '../store/actions';
import MainContextNavigation from "../components/MainContextNavigation";
import Cart from "../components/Cart";

class ContextDemoCart extends Component {
  static contextType = ShopContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <>
        {/*<MainNavigation*/}
        {/*  cartItemNumber={this.context.cart.reduce((count, curItem) => {*/}
        {/*    return count + curItem.quantity;*/}
        {/*  }, 0)}*/}
        {/*/>*/}
        <Cart
          cart={this.props.cartItems}
          removeFromCartCallback={this.context.removeProductFromCart}
        />
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default ContextDemoCart;