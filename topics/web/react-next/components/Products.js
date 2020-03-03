import React from "react";
import styled from "styled-components";
import {addProductToCart} from '../store/actions';
import {connect} from "react-redux";
import MainReduxNavigation from "./MainReduxNavigation";

const StyledProducts = styled.main`
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #00179b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Products = ({cartItemCount, dispatchAddProductToCart, products}) => (
  <>
    <MainReduxNavigation cartItemNumber={cartItemCount}/>
    <StyledProducts>
      <List>
        {products.map(product => (
          <ListItem key={product.id}>
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button
                onClick={event => dispatchAddProductToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </ListItem>
        ))}
      </List>
    </StyledProducts>
  </>
);

const mapStateToProps = state => {
  return {
    products: state.products,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddProductToCart: product => dispatch(addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);