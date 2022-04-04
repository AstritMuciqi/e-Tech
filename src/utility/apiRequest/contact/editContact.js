// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const editContact = async (contactId,contactBody) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.put(`contact/${contactId}`, contactBody)).data;

  return result;
};

export default editContact;
