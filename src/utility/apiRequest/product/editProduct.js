// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editProduct = async (productId,productBody) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.put(`products/${productId}`, productBody)).data;

  return result;
};

export default editProduct;
