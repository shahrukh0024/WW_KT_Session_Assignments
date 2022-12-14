import React from "react";
import { useState } from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../../Actions/productsAction";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./CartItemStyle.css"
import { toast, ToastContainer } from "react-toastify";



const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(item.qty);
  const handleremoveFromCart = (id) => {
    console.log(id);
    showToastMessage();
    dispatch(removeFromCart(id));
    
  };
  const onChangeHandler = (eventKey) => {
    console.log(eventKey);
    setInput(eventKey);
    dispatch(adjustItemQty(item.id, eventKey));
  };

  function Qtydropdown() {
    return (
      <DropdownButton align="center" id="dropdown-basic-button" title={input} onSelect={onChangeHandler}>
        <Dropdown.Item eventKey="1">1</Dropdown.Item>
        <Dropdown.Item eventKey="2">2</Dropdown.Item>
        <Dropdown.Item eventKey="3">3</Dropdown.Item>
        <Dropdown.Item eventKey="4">4</Dropdown.Item>
        <Dropdown.Item eventKey="5">5</Dropdown.Item>
      </DropdownButton>
    );
  }
  // ||------ TOAST MSG-----||
  const showToastMessage = () => {
    toast.success(`${item.title} has been removed from the Cart !`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    // <Card key={item.id} >
    //     <Row className="justify-content-md">
    //       <Col sm={2}>
    //         <h6>{item.title}</h6>
    //       </Col>
    //       <Col sm={2}>
    //         <Card.Title>₹{item.price}</Card.Title>
    //       </Col>
    //       <Col sm={4}>
    //         <label htmlFor="qty">Qty</label>

    // <select
    //     className = "form-select"
    //     aria-label="Default select example"
    //     onChange={onChangeHandler}
    //     value={input}
    //     >
    //     <option value="1">1</option>
    //     <option value="2">2</option>
    //     <option value="3">3</option>
    //     <option value="4">4</option>
    //     <option value="5">5</option>
    // </select>
    //       </Col>
    //       <Col sm={2}>
    //         <Row>
    //           <h6>Total Price</h6>
    //         </Row>
    //         <Row>
    //         <Card.Title>₹{item.qty * item.price}</Card.Title>
    //         </Row>
    //       </Col>
    //       <Col sm={2}>
    //         <BsTrashFill
    //           onClick={()=>{handleremoveFromCart(item.id)}}
    //         />
    //       </Col>
    //     </Row>
    //     </Card>
    <>
      {/* <!-- Single item --> */}
      <div class="row">
        <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            class="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={item.image} class="w-100" alt={item.title} />
          </div>
        </div>

        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none", color:"navy"}}>
            <p>
              <strong>{item.title}</strong>
            </p>
          </Link>
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          {/* <p>Size: M</p> */}
          <button
            type="button"
            class="btn btn-danger btn-sm me-1 mb-2 "
            data-mdb-toggle="tooltip"
            title="Remove item"
          >
            <BsTrashFill
              onClick={() => {
                handleremoveFromCart(item.id);
              }}
            />
          </button>
          <ToastContainer />
        </div>

        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <p class="text-start text-md-center">
            <strong>₹{item.price}</strong>
            <Qtydropdown style={{ width: "20px" }} />
          </p>

        </div>
      </div>
      {/* <!-- Single item --> */}

      <hr class="my-4 Hrule" />
    </>
  );
};

export default CartItem;
