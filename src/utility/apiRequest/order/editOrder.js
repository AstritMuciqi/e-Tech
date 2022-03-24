// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editOrder = async (orderId,orderBody) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.put(`orders/${orderId}`, orderBody)).data;

  return result;
};

export default editOrder;
