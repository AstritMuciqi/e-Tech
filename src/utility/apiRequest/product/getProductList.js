import apiRequest from "../apiRequest";
// import { getAuth } from "firebase/auth";

const getProductList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = await (await apiRequest.get("products/")).data;
  return result.data;
};

export default getProductList;
