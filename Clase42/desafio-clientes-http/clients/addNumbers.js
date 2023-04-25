const axios = require("axios");

const url ="http://localhost:8080";

const addNumber = async()=>{
    try {
        setInterval(async() => {
            const randomNumber = parseInt(Math.random()*100);
            const response = await axios.post(`${url}/ingreso/${randomNumber}`);
            console.log(response.data.message);
        }, 2000);
    } catch (error) {
        console.log(error);
    }
}

addNumber();