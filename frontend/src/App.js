import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen'
import { ProductScreen } from './screens/ProductScreen'
import { CartScreen } from './screens/CartScreen'
import { SigninScreen } from './screens/SigninScreen'
import { useSelector } from 'react-redux';
import { RegisterScreen } from './screens/RegisterScreen'
import { ProductsScreen } from './screens/ProductsScreen'
import { ShippingScreen } from './screens/ShippingScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { PlaceOrderScreen } from './screens/PlaceOrderScreen';


function App() {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  console.log("user In fo " + userInfo)


  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
                </button>
              <Link to="/">E-commerce</Link>

            </div>
            <div className="header-links">
              <a href="cart.html">Cart</a>
              {
                userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                  <Link to="/sigin">Sign In</Link>
              }
            </div>
          </header>
          <aside className="sidebar" >
            <h3>Shopping Categories</h3>
            <button onClick={closeMenu} className="sidebar-close-button">
              x
            </button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>
              <li>
                <a href="index.html">Shirts</a>
              </li>
            </ul>
          </aside>

          <main className="main">
            <div className="content">
              <Route path="/products" component={ProductsScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/sigin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact={true} component={HomeScreen} />


            </div>

          </main>
          <footer className="footer">
            All right reserved.
        </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
