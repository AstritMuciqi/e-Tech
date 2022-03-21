import getProductList from "./product/getProductList";
import getProduct from "./product/getProduct";
import createProduct from "./product/createProduct";
import editProduct from "./product/editProduct";
import removeProduct from "./product/removeProduct";
import registerUser from "./user/registerUser";
import getCategoryList from "./category/getCategoryList";
import getAll from "./cart/getAll";
import store from "./cart/store";
import deleteAll from "./cart/deleteAll";
import deleteItem from "./cart/delete";



export default {
  getProductList,
  getProduct,
  createProduct,
  getCategoryList,
  editProduct,
  removeProduct,
  registerUser,
  deleteAll,
  deleteItem,
  store,
  getAll
};
