import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadCurrentItem, setAddToCart } from "../../../Actions/productsAction";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "./productStyle.css";

const Product = () => {
  const param = useParams();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.products.products);
  const currentItem = allProducts.find((item) => item.id === param.id);
  const dispatch = useDispatch();
  const [prodQty, setprodQty] = useState(1);
  // console.log(currentItem);
  const handleBack = () => {
    console.log("backworks");
    navigate("/products");
  };
  const handleAdd = () => {
    dispatch(setAddToCart(param.id, prodQty));
    showToastMessage();
    console.log(param.id);
  };
  const handleQty = (e) => {
    const qty = e.target.value;
    console.log(qty);

    console.log(typeof e.target.value);
    setprodQty(Number(qty));
  };
  // ||------ TOAST MSG-----||
  const showToastMessage = () => {
    toast.success(`${currentItem.title} Added to Cart !`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const { img, title, desc, price, id } = currentItem;
  return (
    <>
      <div>
        <div class="container mt-5 mb-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="row">
                  <div class="col-md-6">
                    <div class="images p-3">
                      <div class="text-center p-4">
                        {" "}
                        <img id="main-image" src={img} width="250" />{" "}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="product p-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <BsFillArrowLeftCircleFill
                          onClick={() => {
                            handleBack();
                          }}
                        />
                      </div>
                      <div class="mt-4 mb-3">
                        <h5 class="text-uppercase">{title}</h5>
                        <div class="price d-flex flex-row align-items-center">
                          {" "}
                          <span class="act-price">₹{price}</span>
                        </div>
                      </div>
                      <p class="about">{desc}</p>

                      <div className="cart mt-4 align-items-center">
                        <div className="button_container">
                          <button
                            class="btn btn-success text-uppercase mr-2 px-4"
                            onClick={() => {
                              handleAdd();
                            }}
                          >
                            <span className="nowrap">Add to cart</span>
                          </button>
                          <ToastContainer />
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e) => {
                              handleQty(e);
                            }}
                            value={prodQty}
                          >
                            {/* <option selected>Qty</option> */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
