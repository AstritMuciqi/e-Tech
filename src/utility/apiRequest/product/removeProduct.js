// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeProduct = async (productId) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.delete(`products/${productId}`)).data;

  return result;
};

export default removeProduct;
