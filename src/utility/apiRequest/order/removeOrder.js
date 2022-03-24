// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeOrder = async (orderId) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.delete(`orders/${orderId}`)).data;

  return result;
};

export default removeOrder;
