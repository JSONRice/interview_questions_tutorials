import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import { createGlobalStyle } from "styled-components";
import reduxThunk from 'redux-thunk';
import shopReducer from "../store/reducers";

/**
 * These should go into their own separate file and imported in once. Same story for Other.js Need to come up with a strategy for global styles.
 */
const GlobalStyle = createGlobalStyle`
  a {
    cursor: pointer;
  }
  
  .main-navigation {
      width: 100%;
      height: 4.5rem;
      background: #00179b;
  }
  
  .main-navigation nav {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
  }
  
  .main-navigation ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
  }
  
  .main-navigation li {
      margin: 0 1rem;
  }
  
  .main-navigation a {
      display: block;
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: white;
      border-radius: 5px;
  }
  
  .main-navigation a:hover,
  .main-navigation a:active {
      background: white;
      color: #00179b;
  }  
`;


// Setup a Redux store and expose it at the top level in the App.
const store = createStore(shopReducer, applyMiddleware(reduxThunk));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // The Component is the NextJS routed page component. This App component is what is bootstrapped by NextJS.
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp
