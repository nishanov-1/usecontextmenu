import React, { useContext } from "react";
import { ProductContext } from "../../context";

const Addproduct = () => {
  const {
    productUrl,
    productAll,
    setProductAll,
    setProductUrl,
    productname,
    setProductname,
    productprice,
    setProductprice,
  } = useContext(ProductContext);

  const addToProduct = () => {
    if (productUrl === "" || productname === "" || productprice === "") {
      alert("заполни пустое поле");
    } else if (productAll.find((el) => el.name === productname)) {
      alert("такой элемент уже существует");
    } else {
      let newProduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productUrl,
        name: productname,
        price: productprice,
      };
      let resultLocal = JSON.parse(localStorage.getItem("product")) || [];
      resultLocal.push(newProduct);
      localStorage.setItem("product", JSON.stringify(resultLocal));
      let result = [...productAll, newProduct];
      setProductAll(resultLocal);
      setProductUrl("");
      setProductname("");
      setProductprice("");
    }
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };
  console.log(productAll);
  return (
    <div id="addproduct">
      <div className="container">
        <div className="addproduct flex items-center flex-col pt-10 gap-4">
          <div className="relative z-0 mb-5 group w-80">
            <input
              // value={productUrl}
              onChange={onChange}
              type="file"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              product URl(...)
            </label>
          </div>
          <div className="relative z-0 mb-5 group w-80">
            <input
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              product name
            </label>
          </div>
          <div className="relative z-0  mb-5 group w-80">
            <input
              value={productprice}
              onChange={(e) => setProductprice(e.target.value)}
              type="number"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              price
            </label>
          </div>
          <button
            onClick={() => addToProduct()}
            type="button"
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
