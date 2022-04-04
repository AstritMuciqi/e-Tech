import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getBrandList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.get("brands/")).data;
  return result.data;
};

export default getBrandList;