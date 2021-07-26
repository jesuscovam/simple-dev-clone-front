import axios from "axios";

const API_URL = `http://localhost:8080/api/`;

const getPosts = async () => {
    try {
        const {data} = await axios.get(API_URL);
        return data;
    }catch (error) {
        console.log(error)
    }
}

const getPostByUsername = async (username) => {
    try {
        const {data} = await axios.get(`${API_URL}/posts/${username}`);
        return data;
    }catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPosts,
    getPostByUsername
}