const urlApi = "https://rickandmortyapi.com/api/character/2";

const response = await fetch(urlApi);
const data = await response.json();
console.log(data);