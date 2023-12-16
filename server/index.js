const express=require('express')
const {ApolloServer}=require('@apollo/server')

const {expressMiddleware}=require('@apollo/server/express4')
const parser=require('body-parser')

require('dotenv').config()

const {typeDef}=require('./schema/type_def')
const {resolver}=require('./schema/resolver')


async function startServer(){
    const app=express()

    const server=new ApolloServer({
        typeDefs:typeDef,
        resolvers:resolver
    })
    
    await server.start()
    app.use(parser.json())
    app.use('/graphql',expressMiddleware(server))

    app.listen(process.env.PORT,()=>console.log(`server start`))
}

startServer()