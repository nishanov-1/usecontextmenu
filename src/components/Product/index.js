import React, { useContext } from "react";
import { ProductContext } from "../../context";

const Product = () => {
  const { productAll, getPro, setGetPro } = useContext(ProductContext);
  function addToBasket(data) {
    let findProduct = getPro.find((el) => el.id === data.id);
    if (!findProduct) {
      let res = JSON.parse(localStorage.getItem("basket")) || [];
      data.quantity = 1;
      res.push(data);
      localStorage.setItem("basket", JSON.stringify(res));
      setGetPro(res);
    } else {
      let changeBasket = getPro.map((el) =>
        el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      let res = JSON.parse(localStorage.getItem("basket")) || [];
      localStorage.setItem("basket", JSON.stringify(changeBasket));
      setGetPro(changeBasket);
    }
  }

  return (
    <div id="product">
      <div className="container">
        <div className="product mt-10 flex content-center gap-10 flex-wrap">
          {productAll.map((el) => (
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="p-8 pt-10 w-full rounded-t-lg"
                  src={el.url}
                  alt="product image"
                />
              </a>
              <div class="px-5  pb-5">
                <a href="#">
                  <h5 class="text-xl mb-4 font-semibold tracking-tight text-gray-900 dark:text-white">
                    {"НАЗВАНИЕ:" + el.name}
                  </h5>
                </a>

                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    {"ЦЕНА: " + el.price + "$"}
                  </span>
                  <button
                    onClick={() => addToBasket(el)}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
