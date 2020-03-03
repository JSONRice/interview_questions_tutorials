import React, { Component } from 'react';
import Products from "../components/Products";

class ReduxDemoProducts extends Component {
  render() {
    return (
      <Products products={this.props.products}/>
    );
  }
}

export default ReduxDemoProducts;