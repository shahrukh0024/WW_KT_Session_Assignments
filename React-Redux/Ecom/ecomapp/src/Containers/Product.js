import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Product = () => {
  const param = useParams();
  const fetchSingleItem = async () => {
    const response = await axios
      .get(`https://63388824937ea77bfdc173a7.mockapi.io/Product/:${param.id}`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
  };
  useEffect(() => {
    fetchSingleItem();
  }, []);
  return <h1>hello</h1>;
};
