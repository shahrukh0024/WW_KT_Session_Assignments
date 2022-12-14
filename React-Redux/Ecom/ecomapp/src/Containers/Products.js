import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProductInCart, setProducts } from "../Actions/productsAction";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state);
  const allProducts = productsState.products.products;
  const navigate = useNavigate();
  // console.log(allProducts);

  const fetchProducts = async () => {
    const response = await axios
      // .get("https://fakestoreapi.com/products")
      .get("https://63388824937ea77bfdc173a7.mockapi.io/Product")
      .catch((err) => {
        console.log(err);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };
  const handleAddToCart = (id) => {
    console.log(id);
    const productToCart = allProducts.find((prod) => prod.id === id);
    // const ItemsToCart = [];
    // ItemsToCart.push(productToCart);
    console.log(productToCart);
    dispatch(setProductInCart(productToCart));
    // debugger;
  };
  const handleViewItem = (id) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <CardGroup>
            {allProducts.map((product) => (
              <Col sm={4} key={product.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://picsum.photos/id/${product.id}/200/300`}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Title>${product.price}</Card.Title>
                    <Card.Text>{product.desc.substring(0, 60)}</Card.Text>
                    <div className="buttons">
                      <Button
                        variant="primary"
                        onClick={() => {
                          handleAddToCart(product.id);
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        className="mx-2"
                        onClick={() => {
                          handleViewItem(product.id);
                        }}
                      >
                        View item
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Row>
      </Container>
    </>
  );
};

export default Products;
