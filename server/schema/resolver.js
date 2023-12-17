
const {AllUser,ADDRESS,TASK_LIST}=require('../FakeData')

const resolver={
    User:{
        address:(user)=>ADDRESS.find(address=>address.id==user.id)
    },
    Task:{
        createdBy:(task)=>AllUser.find(user=>user.id==task.createdBy)
    },
    Query:{
        getUsers:()=>AllUser,
        getUser:(parent,args)=>{
            const id=Number(args.id)
            return AllUser.find(user=>user.id==id)
        },
        getAllTask:()=>TASK_LIST.filter(task=>task.isDeleted==false)
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
            newTask.id=lastTaskId+1
            TASK_LIST.push(newTask)
            return newTask
        },

        updateTaskStatus:(parent,args)=>{
            const {id,status}=args.input
            const updateTask=TASK_LIST.find(task=>task.id==id)
            updateTask.status=status
            return updateTask
        },

        removeTask:(parent,args)=>{
            const id=args.id
            const removedTask=TASK_LIST.find(task=>task.id==id)
            removedTask.isDeleted=true
            return removedTask
        }
    }
}

module.exports={resolver}