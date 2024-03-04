import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from ".";

const RootContext = ({ children }) => {
  const [productUrl, setProductUrl] = useState("");
  const [productname, setProductname] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productAll, setProductAll] = useState([]);
  const [getPro, setGetPro] = useState([]);
  const getProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res);
  };
  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setGetPro(res);
  };

  useEffect(() => {
    getProduct();
    getBasket();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        productUrl,
        setProductUrl,
        productname,
        setProductname,
        productprice,
        setProductprice,
        productAll,
        setProductAll,
        getPro,
        setGetPro,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
