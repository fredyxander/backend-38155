import got from "got";

const url = "https://jsonplaceholder.typicode.com";

const getRequest = async()=>{
    try {
        const response = await got.get(`${url}/posts`);
        const posts = JSON.parse(response.body);
        console.log(posts);
    } catch (error) {
        console.log(error)
    }
};
getRequest();