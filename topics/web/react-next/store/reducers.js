import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './actions';

const initialState = {
  products: [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ],
  cart: [],
  cartSum: 0
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  console.log(`Redux reducer (subscriber) received ${action.type}`);
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      console.log('ADD_PRODUCT_TO_CART updatedCart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      debugger;
      console.log('updatedItemIndex ', updatedItemIndex);

      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity--;

      console.log('updatedItem ', JSON.stringify(updatedItem));

      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      console.log('REMOVE_PRODUCT_FROM_CART updatedCart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    default:
      console.log('Default return state (this should never happen)');
      return state;
  }
};

export default shopReducer;