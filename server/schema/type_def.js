
// User->Address

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

    input InputUser{
        id: Int!
        name:String!
        email:String!
    }
    
    input CreateTask{
        title:String!
        description:String!
        timeLine:String!
        createdBy:Int!
        status:TaskStatus=IN_PROGRESS
    }

    input ChangeTaskStatus{
        id:Int!
        status:TaskStatus!
    }

    type Mutation{
        createUser(input:CreateUserInput):User!
        createTask(input:CreateTask):Task!
        updateTaskStatus(input:ChangeTaskStatus):Task!
        removeTask(id:Int!):Task!
    }

    enum TaskStatus{
        COMPLETED,
        ON_HOLD,
        IN_PROGRESS
    }
    `
module.exports={typeDef}