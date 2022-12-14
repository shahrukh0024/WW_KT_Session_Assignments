import React from 'react'
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { adjustItemQty, removeFromCart } from '../../../Actions/productsAction';
import { BsTrashFill } from "react-icons/bs";


const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const [input,setInput] = useState(item.qty);
    const handleremoveFromCart = (id) =>{
      // console.log(e.target.value);
        dispatch(removeFromCart(id));
      }
    const onChangeHandler = (e) =>{
        setInput(e.target.value);
        dispatch(adjustItemQty(item.id,e.target.value));
    }
  return (
    <Card key={item.id} >
        <Row className="justify-content-md">
          <Col sm={2}>
            <h6>{item.title}</h6>
          </Col>
          <Col sm={2}>
            <Card.Title>₹{item.price}</Card.Title>
          </Col>
          <Col sm={4}>
            <label htmlFor="qty">Qty</label>
            
            <select 
                className = "form-select" 
                aria-label="Default select example"
                onChange={onChangeHandler}
                value={input}
                >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </Col>
          <Col sm={2}>
            <Row>
              <h6>Total Price</h6>
            </Row>
            <Row> 
            <Card.Title>₹{item.qty * item.price}</Card.Title>
            </Row>
          </Col>
          <Col sm={2}>
            <BsTrashFill 
              onClick={()=>{handleremoveFromCart(item.id)}}
            />
          </Col>
        </Row>
        </Card>
  )
}

export default CartItem
