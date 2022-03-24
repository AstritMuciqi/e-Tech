import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getOrder = async (orderId) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.get(`orders/${orderId}`)).data;
  return result.data;
};

export default getOrder;

