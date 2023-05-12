import axios from "axios";
import getConfigToken from "../utils/getConfigToken";
import { getAllProductsCartThunk } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const usePurchases = () => {
  const [purchases, setPurchases] = useState();

  const dispatch = useDispatch();

  const buyThisCart = () => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";
    axios
      .post(url, {}, getConfigToken())
      .then((res) => {
        console.log(res.data);
        dispatch(getAllProductsCartThunk());
      })
      .catch((err) => console.log(err));
  };

  const getAllProductsPurchased = () => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";
    axios
      .get(url, getConfigToken())
      .then((res) => setPurchases(res.data))
      .catch((err) => console.log(err));
  };

  return { purchases, getAllProductsPurchased, buyThisCart };
};

export default usePurchases;
