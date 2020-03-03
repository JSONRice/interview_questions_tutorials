import React from 'react';
import Link from "next/link";

const MainContextNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <Link href="/context-demo-products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/context-demo-cart">
            <a>Cart ({props.cartItemNumber})</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainContextNavigation;