// import { getAuth } from "firebase/auth";
import apiCaller from "../apiCaller";

const removeContact = async (contactId) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.delete(`contact/${contactId}`)).data;

  return result;
};

export default removeContact;
