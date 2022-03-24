import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getOrdersList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result =(await apiCaller.get("orders/")).data;
  return result.data;
};

export default getOrdersList;
