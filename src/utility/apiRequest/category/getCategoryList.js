import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getCategoryList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.get("categories/")).data;
  return result.data;
};

export default getCategoryList;
