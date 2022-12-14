import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Products from "./Containers/Products/Products";
import Product from "./Containers/Products/Product/Product";
import Checkout from "./Components/Checkout/Checkout";


export default function App() {
  return (
    <div className="container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
