import { Fragment } from "react";
import {Routes , Route} from 'react-router-dom';
import ProductListPage from "./pages/productList";
import CartListPage from "./pages/cartList";
import ProductDetalisPage from "./pages/productDetalis";

function App() {
 
  return (
    <Fragment>
      <Routes>
        <Route path="/products" element = {<ProductListPage/>}/>
        <Route path="/product-detalis/:id" element = {<ProductDetalisPage/>}/>
        <Route path="/cart" element = {<CartListPage/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
