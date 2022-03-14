import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getCategoryById = async (categoryId) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.get(`categories/${categoryId}`)).data;
  return result;
};


export default getCategoryById;
