const axios = require("axios");

const url ="http://localhost:8080";

const getNumbers = async()=>{
    try {
        setInterval(async() => {
            const response = await axios.get(`${url}/egreso`);
            console.log(response.data);
        }, 10000);
    } catch (error) {
        console.log(error);
    }
}

getNumbers();