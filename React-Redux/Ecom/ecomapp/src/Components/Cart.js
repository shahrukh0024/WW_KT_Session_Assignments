import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.products.cart);
  return (
    <>
      {cartItems.map((item) => (
        <Card>
          <Card.Body>{item.title}</Card.Body>
        </Card>
      ))}
    </>
  );
}
