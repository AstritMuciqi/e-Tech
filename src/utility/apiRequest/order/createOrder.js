// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createOrder = async (orderBody) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.post("orders/", orderBody)).data;

  return result;
};

export default createOrder;
