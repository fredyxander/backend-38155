const express = require("express");
const {buildSchema} = require("graphql");
const {graphqlHTTP} = require("express-graphql");

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//crear nuestro esquema de graphql
const schemaGraphql = buildSchema(`
    type User{
        id: Int,
        nombre: String,
        apellido: String,
        dni: String,
        telefono: String,
        edad: Int,
        ubicacion: String
    }

    input UserInput{
        nombre: String,
        apellido: String,
        dni: String,
        telefono: String,
        edad: Int,
        ubicacion: String
    }

    type Query{
        getUsers: [User],
        getUserById(id:Int): User
    }

    type Mutation{
        addUser(user:UserInput): User,
        deleteUser(id:Int): String
    }
`);

let users = [];
//crear o definir los metodos del esquema
const root = {
    getUsers: ()=>{
        return users;
    },

    getUserById: ({id})=>{
        const user = users.find(elm=>elm.id === id);
        if(user){
            return user;
        } else {
            return null
        }
    },

    addUser: ({user})=>{
        let newId;
        if(users.length>0){
            newId = users[users.length-1].id+1;
        } else {
            newId=1;
        };
        const newUser ={
            id:newId,
            ...user
        };
        users.push(newUser);
        return newUser;
    },

    deleteUser: ({id})=>{
        const newUsers = users.filter(elm=>elm.id !== id);
        users = newUsers;
        return "usuario eliminado"
    }
};

//vincular los metodos y el esquema con nuestro servidor de express
app.use("/api/graphql",graphqlHTTP({
    schema:schemaGraphql,
    rootValue:root,
    graphiql:true
}));