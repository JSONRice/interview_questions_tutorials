import styled from "styled-components";
import {removeProductFromCart} from "../store/actions";
import {connect} from "react-redux";

const StyledCart = styled.main`
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;
`;

const Paragraph = styled.p`
  text-align: center;
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

const Cart = ({cartItems, dispatchRemoveProductFromCart}) => {
  return (
    <>
      <StyledCart>
        {cartItems.length <= 0 && <p>No Item in the Cart!</p>}
        <List>
          {cartItems.map(cartItem => (
            <ListItem key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={event => dispatchRemoveProductFromCart(cartItem.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </ListItem>
          ))}
        </List>
      </StyledCart>
    </>
  )
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchRemoveProductFromCart: id => dispatch(removeProductFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);