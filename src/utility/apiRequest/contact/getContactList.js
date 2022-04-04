import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getContactList = async () => {
  // const token = await getAuth().currentUser.getIdToken();
  const result =(await apiCaller.get("contact/")).data;
  return result.data;
};

export default getContactList;
