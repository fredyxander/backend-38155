const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com";

const getRequest = async()=>{
    try {
        const response = await axios.get(`${url}/posts`);
        const posts = response.data;
        console.log(posts);
    } catch (error) {
        console.log(error)
    }
};
getRequest();