export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

export const addProductToCart = product => {
  console.log('Redux action publishing ADD_PRODUCT_TO_CART');
  console.log('adding product to cart: ', JSON.stringify(product));

  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    }, 700);
  };
};

export const removeProductFromCart = productId => {
  console.log('Redux action publishing REMOVE_PRODUCT_FROM_CART');
  console.log('removing product from cart based on id: ', productId);

  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
      });
    }, 700);
  };
};