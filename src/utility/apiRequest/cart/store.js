// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const store = async ({product, quantity, _id}) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.post("cart/", {product, quantity, _id})).data;

  return result;
};

export default store;
