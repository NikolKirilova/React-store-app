import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { AuthContextProvider} from "./context/auth_context";
import { PayPalScriptProvider  } from "@paypal/react-paypal-js";
// import { UserProvider } from "./context/user_context";
// import { Auth0Provider } from "@auth0/auth0-react";

//dev-0n5e17o6.us.auth0.com
//zhZSxfDGFUnxpF8jFgyDwxUpFDQg1z1V

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-0n5e17o6.us.auth0.com"
  //   clientId="zhZSxfDGFUnxpF8jFgyDwxUpFDQg1z1V"
  //   redirectUri={window.location.origin}
  //   cacheLocation="localstorage"
  // >
  <AuthContextProvider>
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_ID }}> 
        <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
    </PayPalScriptProvider>
  </AuthContextProvider>,
 
  // </Auth0Provider>,

  document.getElementById("root")
);