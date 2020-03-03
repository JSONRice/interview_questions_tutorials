import React from 'react'
import Link from "next/link";

const Home = () => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <Link href="/redux-demo-products"><a>Products (Redux Version)</a></Link>
        </li>
        <li>
          <Link href="/redux-demo-cart"><a>Cart (Redux Version)</a></Link>
        </li>
        <li>
          <Link href="/context-demo-products"><a>Products (React Context Version)</a></Link>
        </li>
        <li>
          <Link href="/context-demo-cart"><a>Cart (React Context Version)</a></Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Home
