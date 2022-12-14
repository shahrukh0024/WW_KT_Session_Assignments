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
  const [deliveryPrice, setDeliveryPrice] = useState(300);
  const cartItems = useSelector((state) => state.products.cart);
  console.log(cartItems);
  useEffect(() => {
    let items = 0;
    let price = 0;

    cartItems.forEach((item) => {
      items += Number(item.qty);
      price += Number(item.qty) * Number(item.price);
    });
    setTotalItems(items);
    setTotalPrice(price);

    price > 500 ? setDeliveryPrice(0) : setDeliveryPrice(300);
  }, [totalPrice, totalItems, setTotalItems, setTotalPrice, cartItems]);
  return (
    <>
      {/* <Row> */}
      <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">
                    Total - {totalItems} {totalItems == 1 ? "item" : "items"}
                  </h5>
                </div>

                {cartItems.length ? (
                  cartItems.map((item) => (
                    <div class="card-body">
                      <CartItem key={item.id} item={item} />
                    </div>
                  ))
                ) : (
                  <h1>Your Cart is Empty</h1>
                )}
              </div>
            </div>

            {cartItems.length ? (
              <>
                <div class="col-md-4">
                  <div class="card mb-4">
                    <div class="card-header py-3">
                      <h5 class="mb-0">Summary</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                          <small className="del-alert">*Free delivery on orders over ₹ 500</small>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Subtotal
                          <span>₹{totalPrice.toFixed(2)}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                          Delivery
                          <span>₹ {deliveryPrice}</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
                            <strong>
                              {/* <p class="mb-0">(including TAXES)</p> */}
                            </strong>
                          </div>
                          <span>
                            <strong>
                              ₹{(totalPrice + deliveryPrice).toFixed(2)}
                            </strong>
                          </span>
                        </li>
                      </ul>
                      <LinkContainer to="/checkout">
                        <div className="checkout_btn">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg btn-block "
                          >
                            Go to checkout
                          </button>
                        </div>
                      </LinkContainer>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>

      {/* <Col sm={4}>
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
                <LinkContainer to="/checkout">
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
        </Col> */}
      {/* </Row> */}
      <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8"></div>
          </div>
        </div>
      </section>
    </>
  );
}
