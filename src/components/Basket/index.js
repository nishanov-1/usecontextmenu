import React, { useContext } from "react";
import { ProductContext } from "../../context";

const Basket = () => {
  const { productAll, getPro, setGetPro } = useContext(ProductContext);
  const del = (tap) => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    let resFilter = res.filter((el) => el.id !== tap.id);
    localStorage.setItem("basket", JSON.stringify(resFilter));
    setGetPro(resFilter);
  };
  let totalPrice = getPro.reduce((acc, el) => {
    return (acc += Number(el.price * el.quantity));
  }, 0);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket mt-[50px]">
          {!getPro.length ? (
            <div
              class="p-4 mb-4 text-center text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span class="font-medium ">ваша корзина пуста!!!</span>
            </div>
          ) : (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Number
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product IMG
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {getPro.map((el, idx) => (
                  <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {idx + 1}
                      </th>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img width={100} src={el.url} alt="img" />
                      </th>
                      <td class="px-6 py-4 text-2xl">{el.name}</td>
                      <td class="px-6 py-4 text-2xl">
                        {el.price * el.quantity + "$"}
                      </td>
                      <td class="px-6 py-4 text-2xl">{el.quantity}</td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => del(el)}
                          type="button"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
                <h1>Total price:{totalPrice}</h1>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
