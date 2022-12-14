import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  adjustGridViewToListView,
  adjustListViewToGridView,
  loadCurrentItem,
  setAddToCart,
  setFilter,
  setProducts,
  setSorting,
} from "../../Actions/productsAction";
import {
  AtoZ,
  PriceHigh,
  PriceLow,
  sortby,
  ZtoA,
} from "../../Constants/filterConstants";
import { useNavigate, useParams } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { BsFillPlusCircleFill, BsGrid3X2Gap, BsList } from "react-icons/bs";
import "./prodStyle.css";
import { LinkContainer } from "react-router-bootstrap";
import { height } from "@mui/system";
import Filter from "../../Components/Filters/Filter";
import DropdownList from "../../Components/Utilities/Dropdown";

const Products = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const productsState = useSelector((state) => state);
  const allProducts = productsState.products.products;
  const navigate = useNavigate();
  const gridView = useSelector((state) => state.products.gridView);
  console.log(gridView);
  const [prodQty, setprodQty] = useState([]);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const selected = useSelector((state)=>state.products.filterOnCategory);
  // console.log(allProducts);
  const [sortValue, setSortValue] = useState("");
  const handleSelect = (eventKey) => {
    console.log(eventKey);
    setSortValue(eventKey);
    dispatch(setSorting(sortValue));
  };

  const fetchProducts = async () => {
    // setApiFlag(true);
    const response = await axios
      .get("https://fakestoreapi.com/products")
      // .get("https://63388824937ea77bfdc173a7.mockapi.io/Product")
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
    // setApiFlag(false);
    dispatch(setFilter(selected));
  };
  // ||------ADD TO CART-----||
  const handleAddToCart = (id, prodQty) => {
    console.log(id);
    dispatch(setAddToCart(id, prodQty));
    // debugger;
  };
  const handleViewItem = async (id) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    // if (apiFlag) {
    fetchProducts();

    // }
  }, []);

  // ||------ HANDLE QTY-----||
  const handleQty = (e, index) => {
    const newprodQty = [...prodQty];
    newprodQty[index] = e.target.value;
    setprodQty(newprodQty);
  };
  // ||------Search Bar-----||
  const [searchInput, setSearchInput] = useState("");
  const searchBarHandler = (e) => {
    let input = e.target.value;
    setSearchInput(input);
  };

  const searchedProducts = filteredProducts.filter((item) => {
    // ((searchInput ==='') ? item : item.title.toLowerCase().includes(searchInput))
    if (searchInput === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(searchInput);
    }
  });

  // ||------FILTER-----||

  console.log(filteredProducts);
  const btnStyle = {
    borderRadius: "0%",
    backgroundColor: "#000000",
    color: "#ffffef",
    border: "none",
  };

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        searchBarHandler={searchBarHandler}
      />
      <div className="dropdown">
        {filteredProducts
          .filter((prod) => {
            const searchTerm = searchInput.toLowerCase();
            const title = prod.title.toLowerCase();
            if (searchTerm.length > 2) {
              return (
                searchTerm &&
                title.startsWith(searchTerm) &&
                title !== searchTerm
              );
            }
          })
          .map((prod) => (
            <LinkContainer to={`/product/${prod.id}`}>
              <div className="dropdown-row">{prod.title}</div>
            </LinkContainer>
          ))}
      </div>
      <Filter />

      <div className="grid-button-wrapper">
        <p className="pr">{filteredProducts.length} Items Found</p>
        <div className="grid-list-buttons">
          <Button
            // style={btnStyle}
            className={gridView ? "prod-style-selected" : "prod-style-btn"}
            onClick={() => dispatch(adjustListViewToGridView())}
          >
            <BsGrid3X2Gap style={{ fontSize: "1.3rem" }} />
          </Button>

          <Button
            // style={btnStyle}
            className={gridView ? "prod-style-btn" : "prod-style-selected"}
            onClick={() => dispatch(adjustGridViewToListView())}
          >
            <BsList style={{ fontSize: "1.3rem" }} />
          </Button>
        </div>

        <DropdownList
          sortby={sortby}
          AtoZ={AtoZ}
          ZtoA={ZtoA}
          PriceHigh={PriceHigh}
          PriceLow={PriceLow}
          sortValue={sortValue}
          handleSelect={handleSelect}
        />
      </div>
      {gridView ? (
        <Container>
          <Row className="justify-content-md-center">
            <CardGroup>
              {filteredProducts.map((product, index) => (
                <LinkContainer to={`/product/${product.id}`}>
                  <Col sm={4} key={product.id}>
                    <Card
                      style={{
                        width: "20rem",
                        height: "25rem",
                        padding: "6px",
                        margin: "6px",
                      }}
                    >
                      <div
                        style={{
                          width: "18rem",
                          height: "18rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          // src={`https://picsum.photos/id/${product.id}/200/300`}
                          src={product.image}
                          style={{ width: "16rem", height: "16rem" }}
                        />
                      </div>
                      <Card.Body>
                        <div className="price">
                          <Card.Title>₹{product.price}</Card.Title>
                          <BsFillPlusCircleFill
                            className="view_btn"
                            onClick={() => {
                              handleViewItem(product.id);
                            }}
                          />
                        </div>
                        <Card.Text>{product.category.toUpperCase()}</Card.Text>
                        <Card.Title style={{ height: "70px" }}>
                          {product.title.substring(0, 27)}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </LinkContainer>
              ))}
            </CardGroup>
          </Row>
        </Container>
      ) : (
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              {/* <!-- List group--> */}
              <ul class="list-group shadow">
                {/* <!-- list group item--> */}
                {filteredProducts.map((product, index) => (
                  <LinkContainer to={`/product/${product.id}`}>
                    <li class="list-group-item" key={product.id}>
                      {/* <!-- Custom content--> */}
                      <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="align-img">
                          <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">
                              {product.title}
                            </h5>
                            <p class="font-italic text-muted mb-0 small">
                              {product.category}
                            </p>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                              <h6 class="font-weight-bold my-2">
                                ₹{product.price}
                              </h6>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                              <BsFillPlusCircleFill
                                className="view_btn"
                                onClick={() => {
                                  handleViewItem(product.id);
                                }}
                              />
                            </div>
                          </div>
                          <img
                            src={product.image}
                            alt="Generic placeholder image"
                            width="200"
                            height="200"
                            class="ml-lg-5 order-1 order-lg-2"
                          />
                        </div>
                      </div>
                      {/* <!-- End --> */}
                    </li>
                  </LinkContainer>
                ))}
              </ul>
              {/* <!-- End --> */}
            </div>
          </div>
        </div>
      )}

      {/* <section class="section-products">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">
              <div class="header">
                <h3>Featured Product</h3>
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
          <div class="row">
          {searchedProducts.map((product, index) => (
            <>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" class="single-product">
                <div class="part-1">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-expand"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">{product.title}</h3>
                  <h4 class="product-old-price">$79.99</h4>
                  <h4 class="product-price">{product.price}</h4>
                </div>
              </div>
            </div>
            </>
          ))}
            
          </div>
        </div>
      </section> */}
      {/* <div class="row">
        {searchedProducts.map((product, index) => (
          <div class="col-md-3 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <div class="image-wrapper">
                  <a href="#" class="image">
                    <img src={product.image} />
                  </a>
                </div>
                <span class="product-discount-label">-23%</span>
                <ul class="product-links">
                  <li>
                    <a href="#">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                </ul>
                <a href="" class="add-to-cart">
                  Add to Cart
                </a>
              </div>
              <div class="product-content">
                <p class="title">
                  <a href="#">{product.title}</a>
                </p>
                <div class="price">
                  &#8377;{product.price} <span>&#8377;68.88</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Products;
