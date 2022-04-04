import apiCaller from "../apiCaller";
// import { getAuth } from "firebase/auth";

const getContact = async (contactId) => {
  // const token = await getAuth().currentUser.getIdToken();
  const result = (await apiCaller.get(`contact/${contactId}`)).data;
  return result.data;
};

export default getContact;

