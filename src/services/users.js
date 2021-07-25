import axios from "axios";

//https://dev-clone-api.herokuapp.com/api/
const API_URL = `http://localhost:8080/api/`;

const createUser = async (bodyUser) => {
  try {
    let response = await axios.post(API_URL + "user", bodyUser);
  } catch (error) {
    return { error: error.response.data.error };
  }
};

const loginUser = async (bodyUser) => {
  try {
    const {data} = await axios.post(API_URL + "user/login", bodyUser);

    return {
      token: data.token,
      user: {
        username: data.username,
        name: data.name,
        avatar_url: "https://github.com/andresargote.png"
      }
    };
    
  } catch (error) {
    return { error: error.response.data.error };
  }
};

const recoverUserInformation = async (token) => {
  try {
    const {data} = await axios.get(API_URL + "user/token", {
      headers: { 
        "Authorization": `Bearer ${token}`
      }
    });

    return {
      user: {
        avatar_url: "https://github.com/andresargote.png",
        ...data
      }
    };
  }catch (error) {
    return error;
  }
}

module.exports = {
  createUser,
  loginUser,
  recoverUserInformation
};
