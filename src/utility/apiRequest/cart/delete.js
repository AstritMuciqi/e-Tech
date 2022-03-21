// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const deleteItem = async (id) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.delete(`cart/${id}`)).data;

  return result;
};

export default deleteItem;
