
const {AllUser,ADDRESS}=require('../FakeData')

const resolver={
    User:{
        address:(user)=>ADDRESS.find(address=>address.id==user.id)
    },

    Query:{
        getUsers:()=>AllUser,
        getUser:(parent,args)=>{
            const id=Number(args.id)
            return AllUser.find(user=>user.id==id)
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const lastUserId=AllUser[AllUser.length-1].id
            const newUser=args.input
            newUser.id=lastUserId+1
            AllUser.push(newUser)
            return newUser
        }
    }
}

module.exports={resolver}