
const typeDef=
    `
    type Address{
        id:ID!
        city:String!
        country:String!
    }
    type User{
        id: Int!
        name:String!
        email:String!
        website:String
        address:Address
    }   

    type Query{
        getUsers: [User]
        getUser(id:Int!):User
    }

    input CreateUserInput{
        name:String!
        email:String!
    }

    type Mutation{
        createUser(input:CreateUserInput):User!
    }
    `
module.exports={typeDef}