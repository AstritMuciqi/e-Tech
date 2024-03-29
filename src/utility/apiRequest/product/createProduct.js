// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createProduct = async (productBody) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.post("products/", productBody)).data;

  return result;
};

export default createProduct;
