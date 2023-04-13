const {ConnectDB} = require("./MongoSingleton");

// const firtsConnection= new ConnectDB();
// firtsConnection.getInstance();

// const secondConnection= new ConnectDB();
// secondConnection.getInstance();

// const thirdConnection= new ConnectDB();
// thirdConnection.getInstance();

const firtsConnection = ConnectDB.getInstance();
const secondConnection = ConnectDB.getInstance();
const thirdConnection = ConnectDB.getInstance();