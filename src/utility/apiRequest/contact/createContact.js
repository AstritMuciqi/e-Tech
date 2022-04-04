// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const createContact = async (contactBody) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.post("contact/", contactBody)).data;

  return result;
};

export default createContact;
