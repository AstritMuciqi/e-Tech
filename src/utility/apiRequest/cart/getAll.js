import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getAll = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result =(await apiCaller.get("cart/")).data;
  return result.data;
};

export default getAll;
