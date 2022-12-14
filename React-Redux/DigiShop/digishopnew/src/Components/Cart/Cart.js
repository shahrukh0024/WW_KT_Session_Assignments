import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import CartItem from "./CartItem/CartItem";
import "./CartStyle.css";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const cartItems = useSelector((state) => state.products.cart);
  useEffect(() => {
    let items = 0;
    let price = 0;

    cartItems.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalItems(items);
    setTotalPrice(price);
  }, [totalPrice, totalItems, setTotalItems, setTotalPrice, cartItems]);
  return (
    <>
      <Row>
        <Col sm={8}>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <h1>Your Cart is Empty</h1>
          )}
        </Col>
        <Col sm={4}>
          {cartItems.length ? (
            <>
              <Card>
                <h2>Cart Summary</h2>
                <div className="total_price">
                  <span>
                    <h6>Total:({totalItems} items)</h6>
                  </span>
                  <span>
                    <h6> ₹{totalPrice}</h6>
                  </span>
                </div>
                <LinkContainer to='/checkout'>
                  <div className="checkout_wrapper">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block checkout"
                      sm={8}
                    >
                      Checkout
                    </button>
                  </div>
                </LinkContainer>
              </Card>
            </>
          ) : null}
        </Col>
      </Row>
    </>
  );
}
