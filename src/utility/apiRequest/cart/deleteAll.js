// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeAll = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.delete('cart/')).data;

  return result;
};

export default removeAll;
