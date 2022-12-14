import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrentItem, setAddToCart, setProducts } from "../../Actions/productsAction";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./prodStyle.css"
import { LinkContainer } from "react-router-bootstrap";

const Products = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const productsState = useSelector((state) => state);
  const allProducts = productsState.products.products;
  const navigate = useNavigate();
  const [prodQty,setprodQty] = useState([]);
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
  // ||------ADD TO CART-----||
  const handleAddToCart = (id,prodQty) => {
    console.log(id);
    dispatch(setAddToCart(id,prodQty));
    // debugger;
  };
  const handleViewItem = async (id) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

// ||------ HANDLE QTY-----||
  const handleQty = (e,index)=>{
    const newprodQty = [...prodQty];
    newprodQty[index] = e.target.value;
    setprodQty(newprodQty);
    }
// ||------Search Bar-----||
const [searchInput,setSearchInput] = useState("");
const searchBarHandler = (e) =>{
    let input = e.target.value;
    setSearchInput(input);
}

const filteredProducts = allProducts.filter((item)=>{
  // ((searchInput ==='') ? item : item.title.toLowerCase().includes(searchInput))
  if(searchInput === ''){
    return item;
  }
  else{
    return item.title.toLowerCase().includes(searchInput);
  }
})

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        searchBarHandler={searchBarHandler}
      />
      <Container>
        <Row className="justify-content-md-center">
          <CardGroup>
            {filteredProducts.map((product,index) => (
              <LinkContainer to={`/product/${product.id}`}>
              <Col sm={4} key={product.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://picsum.photos/id/${product.id}/200/300`}
                    // src={product.image}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    {/* <Card.Text>{product.desc.substring(0, 30)}</Card.Text> */}
                    <div className="price">
                      <Card.Title>₹{product.price}</Card.Title>
                      <BsFillPlusCircleFill 
                        className="view_btn"
                        onClick={() => {handleViewItem(product.id);}}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              </LinkContainer>
            ))}
          </CardGroup>
          
        </Row>
      </Container>
    </>
  );
};

export default Products;
