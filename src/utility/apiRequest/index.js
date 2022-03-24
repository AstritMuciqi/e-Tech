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
import getOrder from "./order/getOrder";
import getOrdersList from "./order/getOrdersList";
import createOrder from "./order/createOrder";
import editOrder from "./order/editOrder";
import removeOrder from "./order/removeOrder";



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
  getAll,
  getOrder,
  getOrdersList,
  createOrder,
  editOrder,
  removeOrder
};
