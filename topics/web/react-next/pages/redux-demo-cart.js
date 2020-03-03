import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../store/actions';
import Cart from "../components/Cart";
import MainReduxNavigation from "../components/MainReduxNavigation";

const ReduxDemoCart = ({cartItemCount}) => {
  return (
    <>
      <MainReduxNavigation cartItemNumber={cartItemCount} />
      <Cart/>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

export default connect(
  mapStateToProps,
  undefined
)(ReduxDemoCart);