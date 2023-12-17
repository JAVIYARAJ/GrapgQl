
const {AllUser,ADDRESS,TASK_LIST}=require('../FakeData')

const resolver={
    User:{
        address:(user)=>ADDRESS.find(address=>address.id==user.id)
    },
    Task:{
        createdBy:(task)=>AllUser.find(user=>user.id==task.createdBy)
    },
    CreateTask:{
        createdBy:()=>AllUser[0]
    },
    Query:{
        getUsers:()=>AllUser,
        getUser:(parent,args)=>{
            const id=Number(args.id)
            return AllUser.find(user=>user.id==id)
        },
        getAllTask:()=>TASK_LIST
    },
    Mutation:{
        createUser:(parent,args)=>{
            const lastUserId=AllUser[AllUser.length-1].id
            const newUser=args.input
            newUser.id=lastUserId+1
            AllUser.push(newUser)
            return newUser
        },
        createTask:(parent,args)=>{
            const lastTaskId=TASK_LIST[TASK_LIST.length-1].id
            const newTask=args.input
            newTask.id=lastTaskId
            TASK_LIST.push(newTask)
            return newTask
        }
    }
}

module.exports={resolver}