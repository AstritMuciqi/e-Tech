import ApiRequest from "../apiReq";

const registerUser = async (email, password) => 
    await ApiRequest.post('/users/register', {
    email,
    password,
  });

  export default registerUser;