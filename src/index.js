import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import {app} from './app.js'
import {connectDB} from '../db/index.js'

dotenv.config({
    path:'./.env'
})

connectDB()
.then(async()=>{
    const connectionInstance=mongoose.connection
    app.listen(process.env.PORT || 7000,`Server listening at port http://localhost:${PORT}`)
    try {
        connectionInstance.once('open',async()=>{
            const users=await fetchData()
            console.log(users);
        })   
    } catch (error) {
        console.log(error);
    }
})
.catch((error)=>{
    console.log('Database connection failed',error);
})