import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getProductList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result =(await apiCaller.get("products/")).data;
  return result.data;
};

export default getProductList;
