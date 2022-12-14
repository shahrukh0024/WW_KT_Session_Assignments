import React, { useEffect, useState } from "react";
import DropdownList from "../Utilities/Dropdown";
import {
  AtoZ,
  PriceHigh,
  PriceLow,
  sortby,
  ZtoA,
} from "../../Constants/filterConstants";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSorting } from "../../Actions/productsAction";
import { Button, ButtonGroup } from "react-bootstrap";
import "./FilterStyle.css";
import { useSelect } from "@mui/base";

const Filter = () => {
  const dispatch = useDispatch();
  const [sortValue, setSortValue] = useState("");
  const selected = useSelector((state)=>state.products.filterOnCategory);
  console.log(selected);
  const btnStyle = {
    borderRadius: "0%",
    backgroundColor: "#000000",
    color: "#ffffef",
    border: "none",
  };

  const handleSelect = (eventKey) => {
    console.log(eventKey);
    setSortValue(eventKey);
    dispatch(setSorting(sortValue));
  };

  useEffect(() => {
    dispatch(setSorting(sortValue));
    dispatch(setFilter(selected));
  }, []);
  

  const categoryHandler = (e,cat) =>{
    dispatch(setFilter(cat));
    console.log(e.target.value);
    // e.currentTarget.classList.toggle(selected == e.target.value ? "selectedCategory" : 'categorybtn');

  }

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: "10px",
        margin: "5px",
      }}
    >
      <ButtonGroup aria-label="Basic example">
        <Button
          className = {selected == "all items" ? "selectedCategory" : 'categorybtn'}
          type="button"
          // variant="outline"
          // style={btnStyle}
          onClick={(e) => {
            categoryHandler(e,"all items")
          }}
          value="all items"
        >
          All items
        </Button>
        <Button
          className = {selected == "men's clothing" ? "selectedCategory" : 'categorybtn'}
          type="button"
          value = "men's clothing"
          // className="btn btn-primary btn-sm"
          // style={btnStyle}
          onClick={(e) => {
            categoryHandler(e,"men's clothing")
          }}
        >
          men's clothing
        </Button>
        <Button
          type="button"
          value = "electronics"
          className = {selected == "electronics" ? "selectedCategory" : 'categorybtn'}
          // className="btn btn-primary btn-sm"
          // style={btnStyle}
          onClick={(e) => {
            categoryHandler(e,"electronics")
          }}
        >
          electronics
        </Button>
        <Button
          type="button"
          value="jewelery"
          className = {selected == "jewelery" ? "selectedCategory" : 'categorybtn'}
          // className="btn btn-primary btn-sm"
          // style={btnStyle}
          onClick={(e) => {
            categoryHandler(e,"jewelery")
          }}
        >
          jewelery
        </Button>
        <Button
          type="button"
          value="women's clothing"
          className = {selected == "women's clothing" ? "selectedCategory" : 'categorybtn'}
          // className="btn btn-primary btn-sm"
          // style={btnStyle}
          onClick={(e) => {
            categoryHandler(e,"women's clothing")
          }}
        >
          women's clothing
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default Filter;
