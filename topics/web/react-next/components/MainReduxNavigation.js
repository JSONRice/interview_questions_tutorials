import React from 'react';
import Link from "next/link";

const MainReduxNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <Link href="/redux-demo-products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/redux-demo-cart">
            <a>Cart ({props.cartItemNumber})</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainReduxNavigation;