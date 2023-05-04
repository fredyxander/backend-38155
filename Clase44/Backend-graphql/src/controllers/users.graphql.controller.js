const {buildSchema} = require("graphql");
const {graphqlHTTP} = require("express-graphql");
const {rootGraphqlService} = require("../repository/index");

//crear el esquema de graphql
const schemaGraphql = buildSchema(`
    type User{
        _id: String,
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
        getUserById(id:String): User
    }

    type Mutation{
        addUser(user:UserInput): User,
        deleteUser(id:String): String
    }
`);

const graphqlController = ()=>{
    return graphqlHTTP({
        schema:schemaGraphql,
        rootValue:rootGraphqlService,
        graphiql:true
    })
};

module.exports = {graphqlController}