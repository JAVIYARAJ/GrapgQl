
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
    
    type Task{
        id:Int!
        title:String!
        description:String!
        timeLine:String!
        createdBy:User!
        status:TaskStatus!
    }

    
    

    type Query{
        getUsers: [User]
        getUser(id:Int!):User
        getAllTask : [Task]
    }

    input CreateUserInput{
        name:String!
        email:String!
    }

    input CreateTask{
        title:String!
        description:String!
        timeLine:String!
        createdBy:User
        status:TaskStatus=IN_PROGRESS
    }

    type Mutation{
        createUser(input:CreateUserInput):User!
        createTask(input:CreateTask):Task!
    }

    enum TaskStatus{
        COMPLETED,
        ON_HOLD,
        IN_PROGRESS
    }
    `
module.exports={typeDef}